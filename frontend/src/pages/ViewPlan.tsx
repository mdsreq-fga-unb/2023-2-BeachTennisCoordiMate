import '../index.css';
import Header from '../components/Header';
import { useState } from 'react';
import ClassPlanService from '../service/classPlanService';
import DrillService from '../service/drillService';
import { toast, ToastContainer } from 'react-toastify';
import { Icon } from '@iconify/react/dist/iconify.js';
import DrillElementService from '../service/drillElementService';
import html2pdf from 'html2pdf.js';

const ViewPlan = () => {
  const stringSelectedClassPlan = localStorage.getItem('selectedClassPlan');
  const selectedClassPlan = JSON.parse(
    stringSelectedClassPlan ? stringSelectedClassPlan : '',
  );
  const stringDrillsSelectedClassPlan = localStorage.getItem(
    'drillsSelectedClassPlan',
  );
  const [title, setTitle] = useState(selectedClassPlan.title);
  const [titleAux, setTitleAux] = useState('');
  const [goals, setGoals] = useState(selectedClassPlan.goals);
  const [goalsAux, setGoalsAux] = useState('');
  const [observations, setObservations] = useState(
    selectedClassPlan.observations,
  );
  const [observationsAux, setObservationsAux] = useState('');
  const [titleNotEdited, setTitleNotEdited] = useState(true);
  const [goalsNotEdited, setGoalsNotEdited] = useState(true);
  const [observationsNotEdited, setObservationsNotEdited] = useState(true);

  const classPlan = new ClassPlanService();

  const [titleDrill, setTitleDrill] = useState('');
  const [visibleCreateDrill, setVisibleCreateDrill] = useState(false);
  const [visibleDeleteDrill, setVisibleDeleteDrill] = useState(false);
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [drills, setDrills] = useState(
    JSON.parse(
      stringDrillsSelectedClassPlan ? stringDrillsSelectedClassPlan : '',
    ),
  );
  const drill = new DrillService();

  const userString = localStorage.getItem('user');

  let userId: string;

  if (userString !== null) {
    const user = JSON.parse(userString);
    userId = user.id;
  } else {
    userId = '';
  }

  const openNewItemPanel = () => {
    setVisibleCreateDrill(true);
    setTitleDrill('');
    setVisibleDeleteDrill(false);
  };

  const closeNewItemPanel = () => {
    setVisibleCreateDrill(false);
    setTitleDrill('');
  };

  const closeDeleteItemPanel = () => {
    setVisibleDeleteDrill(false);
  };

  const openDeletePanel = () => {
    setVisibleCreateDrill(false);
    setTitleDrill('');
    setVisibleDeleteDrill(true);
  };

  const handleCreateDrill = async () => {
    try {
      if (!titleDrill) toast.warning('Preencha o campo do título');
      else if (titleDrill.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        let data = {
          title: titleDrill,
          description: '',
          observations: '',
          image: '',
          classPlanId: selectedClassPlan.id,
        };
        let newDrillData = await drill.save(data);
        setDrills((prevArray) => [...prevArray, newDrillData.data]);
        toast.success('Drill cadastrado com sucesso');
        closeNewItemPanel();
        setTitleDrill('');
      }
    } catch (error) {
      toast.error('Erro ao cadastrar drill');
    }
    return;
  };

  const handleDeleteDrill = async () => {
    try {
      await drill.deleteById(deletedItem);
      setDrills((prevItems) =>
        prevItems.filter((item) => item.id != deletedItem),
      );
      toast.success('Drill excluído com sucesso');
      closeDeleteItemPanel();
      setDeletedItem('');
    } catch (error) {
      toast.error('Erro ao excluir drill');
    }
    return;
  };

  const startEditingTitle = () => {
    setTitleAux(title);
    setTitleNotEdited(false);
  };

  const startEditingGoals = () => {
    setGoalsAux(goals);
    setGoalsNotEdited(false);
  };

  const startEditingObservations = () => {
    setObservationsAux(observations);
    setObservationsNotEdited(false);
  };

  const finishEditingTitle = async () => {
    try {
      if (!titleAux) toast.warning('Preencha o campo do título');
      else if (titleAux.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        let data = {
          id: selectedClassPlan.id,
          title: titleAux,
          goals: goals,
          observations: observations,
          userId: userId,
        };
        console.log(data);
        setTitleNotEdited(true);
        await classPlan.updateById(selectedClassPlan.id, data);
        setTitle(titleAux);
        toast.success('Título atualizado com sucesso');
      }
    } catch (error) {
      console.log();
      toast.error('Erro ao atualizar drill');
      setTitleNotEdited(true);
      setTitleAux('');
    }
    return;
  };

  const finishEditingGoals = async () => {
    try {
      let data = {
        id: selectedClassPlan.id,
        title: title,
        goals: goalsAux,
        observations: observations,
        userId: userId,
      };
      await classPlan.updateById(selectedClassPlan.id, data);
      setGoals(goalsAux);
      toast.success('Descrição atualizada com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar drill');
    } finally {
      setGoalsAux('');
      setGoalsNotEdited(true);
    }
    return;
  };

  const finishEditingObservations = async () => {
    try {
      setObservationsAux('');
      let data = {
        id: selectedClassPlan.id,
        title: title,
        goals: goals,
        observations: observationsAux,
        userId: userId,
      };
      await classPlan.updateById(selectedClassPlan.id, data);
      setObservations(observationsAux);
      toast.success('Observações atualizadas com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar drill');
    } finally {
      setObservationsAux('');
      setObservationsNotEdited(true);
    }
    return;
  };

  const redirectToDrill = async (selectedId: string) => {
    try {
      const response = await drill.getById(selectedId);
      localStorage.setItem('selectedDrill', JSON.stringify(response.data));
      const drillElement = new DrillElementService();
      const drillSelectedElements =
        await drillElement.getManyByDrillId(selectedId);
      localStorage.setItem(
        'drillSelectedElements',
        JSON.stringify(drillSelectedElements.data),
      );
      setTimeout(() => {
        window.location.href = `/drill/${selectedId}`;
      }, 3000);
    } catch (error) {
      toast.error('Erro ao buscar informações do drill');
    }
  };

  const redirectToClassPlans = async () => {
    try {
      let userClassPlans = await classPlan.getManyById(
        selectedClassPlan.userId,
      );
      localStorage.setItem(
        'userClassPlans',
        JSON.stringify(userClassPlans.data),
      );
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {}
  };

  const downloadPlan = async () => {
    try {
      // Carregar todos os drills relacionados ao plano de aula
      const drillResponses = await Promise.all(
        drills.map((drl) => drill.getById((drl as { id: string }).id))
      );
  
      // Criar um elemento HTML para representar o plano de aula e os drills
      const container = document.createElement('div');
  
      // Adicionar os dados do plano de aula ao HTML
      const planDiv = document.createElement('div');
      planDiv.style.margin = '50px'
      planDiv.innerHTML = `
        <center><h1 style="color: black; font-size: 2em; margin-top: 1em;">${title}</h1></center>
        <br></br>
        <h2 style="color: blue; font-size: 2em;">Objetivos</h2>
        <p style="color: black;">${goals}</p>
        <br></br>
        <h2 style="color: blue; font-size: 2em;">Observações</h2>
        <p style="color: black;">${observations}</p>
        <br></br>
        <h1 style="color: blue; font-size: 2em">Drills</h1>
      `;
      container.appendChild(planDiv);
  
      // Adicionar os dados dos drills ao HTML
      drillResponses.forEach((response) => {
        const drillData = response.data;
        const drillDiv = document.createElement('div');
        drillDiv.innerHTML = `
          <br></br>
          <center><h1 style="color: black; font-size: 2em">${drillData.title}</h2></center>
          <br></br>
          <h2 style="color: blue; font-size: 2em">Descrição</h1>
          <p style="color: black;">${drillData.description}</p>
          <br></br>
          <h2 style="color: blue; font-size: 2em">Observações</h2>
          <p style="color: black;">${drillData.observations}</p>
          <br></br>
          <img src="${drillData.image}" style="width: 100%; max-width: 500px; height: auto; display: block; margin-left: auto; margin-right: auto;"/>
          
          `;
        container.appendChild(drillDiv);
      });
  
      // Configurar as opções do html2pdf
      const options = {
  
        filename: 'plano_de_aula_com_drills.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
  
      // Converter o HTML para PDF usando html2pdf
      html2pdf(container, options);
  
    } catch (error) {
      console.error('Erro ao criar o arquivo PDF:', error);
      // Lide com o erro conforme necessário
    }
  };

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: '#272727', color: 'white' }}
        closeButton={
          <Icon
            icon="tabler:x"
            color="white"
            width="15px"
            className="clickableIcon"
          />
        }
      />
      <Header
        changeScreenFunction={redirectToClassPlans}
        hasReturnArrow={true}
      />
      <div style={{ backgroundColor: '#272727', color: 'white' }}>
        {titleNotEdited ? (
          <div
            className="titleLayout"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            <h1
              style={{
                paddingRight: '10px',
                overflow: 'hidden',
              }}
            >
              {title}
            </h1>
            <Icon
              icon="ph:pencil"
              color="white"
              width="25px"
              onClick={startEditingTitle}
              className="clickableIcon"
            />
            <button onClick={downloadPlan}
              style={{paddingLeft: "10px"}}>
              <Icon icon="bi:download" color="white" width="20" />
            </button>
          </div>
        ) : (
          <div
            className="titleLayout"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            <input
              className="inputsDrill w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              id="inputTitle"
              style={{ marginRight: '10px' }}
              onChange={(e) => setTitleAux(e.target.value)}
              maxLength={50}
              value={titleAux}
            />{' '}
            <Icon
              icon="iconamoon:check-fill"
              color="white"
              width="25px"
              onClick={finishEditingTitle}
              className="clickableIcon"
            />{' '}
          </div>
        )}
        <div className="contentClassPlan">
          <div className="titleLayoutClassPLan">
            <h1
              style={{
                paddingRight: '10px',
                overflow: 'hidden',
              }}
            >
              {' '}
              Objetivos{' '}
            </h1>
            {goalsNotEdited ? (
              <Icon
                icon="ph:pencil"
                color="white"
                width="25px"
                className="clickableIcon"
                onClick={startEditingGoals}
              />
            ) : (
              <Icon
                icon="iconamoon:check-fill"
                color="white"
                width="25px"
                onClick={finishEditingGoals}
                className="clickableIcon"
              />
            )}
          </div>
          {goalsNotEdited ? (
            <p className="pClassPlan">{goals}</p>
          ) : (
            <textarea
              className="pClassPlan card space-y-4 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              onChange={(e) => setGoalsAux(e.target.value)}
              maxLength={500}
              value={goalsAux}
            />
          )}
        </div>
        <div className="contentClassPlan">
          <div className="titleLayoutClassPLan">
            <h1
              style={{
                paddingRight: '10px',
                overflow: 'hidden',
              }}
            >
              {' '}
              Observações
            </h1>
            {observationsNotEdited ? (
              <Icon
                icon="ph:pencil"
                color="white"
                width="25px"
                className="clickableIcon"
                onClick={startEditingObservations}
              />
            ) : (
              <Icon
                icon="iconamoon:check-fill"
                color="white"
                width="25px"
                onClick={finishEditingObservations}
                className="clickableIcon"
              />
            )}
          </div>
          {observationsNotEdited ? (
            <p className="pClassPlan">{observations}</p>
          ) : (
            <textarea
              className="pClassPlan card space-y-4 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              onChange={(e) => setObservationsAux(e.target.value)}
              maxLength={500}
              value={observationsAux}
            />
          )}
        </div>
        <div className="containerVisibleComp">
          <h1 style={{ fontSize: '30px', color: 'white', padding: '10px 0' }}>
            Drills
          </h1>
          <div className="buttonsPanel">
            <button className="addButton" onClick={openNewItemPanel}>
              <Icon icon="simple-line-icons:plus" color="white" width="40" />
            </button>
            {drills &&
              drills.map((a) => {
                return (
                  <div id={a.id} key={a.id} className="itemButton">
                    <button
                      onClick={() => {
                        redirectToDrill(a.id);
                      }}
                    >
                      <h1 className="clickableTitle">{a.title}</h1>
                    </button>
                    <Icon
                      icon="mdi:trash"
                      color="white"
                      width="20"
                      key={a.id}
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '20px',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setDeletedItemTitle(a.title);
                        setDeletedItem(a.id);
                        openDeletePanel();
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {visibleCreateDrill && (
        <div className="panelHandleItem" style={{ zIndex: 5 }}>
          <div className="upContainer">
            <h1>Criar Drill</h1>
            <Icon
              onClick={closeNewItemPanel}
              icon="tabler:x"
              className="clickableIcon"
              color="white"
              width="30"
            />
          </div>
          <input
            placeholder="Título"
            className="inputsDesign w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            onChange={(e) => setTitleDrill(e.target.value)}
          ></input>
          <button
            style={{
              backgroundColor: '#1B74E4',
              padding: '5px 20px',
              borderRadius: '10px',
              border: '1px solid black',
            }}
            onClick={handleCreateDrill}
          >
            Criar
          </button>
        </div>
      )}
      {visibleDeleteDrill && (
        <div
          className="panelHandleItem"
          style={{ padding: '3px 0px 10px 0px' }}
        >
          <div className="upContainer" style={{ justifyContent: 'flex-end' }}>
            <Icon
              onClick={closeDeleteItemPanel}
              icon="tabler:x"
              className="clickableIcon"
              color="white"
              width="30"
            />
          </div>
          <h1 style={{ textAlign: 'center' }}>
            Tem certeza que deseja excluir "{deletedItemTitle}"?
          </h1>
          <button
            style={{
              backgroundColor: '#1B74E4',
              padding: '5px 20px',
              borderRadius: '10px',
              border: '1px solid black',
            }}
            onClick={handleDeleteDrill}
          >
            Excluir
          </button>
        </div>
      )}
    </>
  );
};

export default ViewPlan;
