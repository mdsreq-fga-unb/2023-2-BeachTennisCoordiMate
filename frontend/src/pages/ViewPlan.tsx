import '../index.css';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import ClassPlanService from '../service/classPlanService';
import { Link, useParams } from 'react-router-dom';
import DrillService from '../service/drillService';
import { toast, ToastContainer} from 'react-toastify';
import { Icon } from '@iconify/react/dist/iconify.js';
import html2pdf from 'html2pdf.js';

const ViewPlan = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [titleAux, setTitleAux] = useState('');
  const [goals, setGoals] = useState('');
  const [goalsAux, setGoalsAux] = useState('');
  const [observations, setObservations] = useState('');
  const [observationsAux, setObservationsAux] = useState('');
  const [titleNotEdited, setTitleNotEdited] = useState(true);
  const [goalsNotEdited, setGoalsNotEdited] = useState(true);
  const [observationsNotEdited, setObservationsNotEdited] = useState(true);
  
  
  const classPlan = new ClassPlanService();
  
  const [planUpdated, setplanUpdated] = useState({
    id: '',
    title: '',
    goals: '',
    observations: '',
    userId: '',
  });
  const userString = localStorage.getItem('user');
  
  let userId: string;

  if (userString !== null) {
    const user = JSON.parse(userString);
    userId = user.id;
  } else {
    userId = '';
  }
  
  const { idDrill } = useParams();

  const [titleDrill, setTitleDrill] = useState('');
  const [descriptionDrill, setDescriptionDrill] = useState('');
  const [observationsDrill, setObservationsDrill] = useState('');
  const [visibleCreateDrill, setVisibleCreateDrill] = useState(false);
  const [visibleDeleteDrill, setVisibleDeleteDrill] = useState(false);
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [drills, setDrills] = useState([]);
  const drill = new DrillService();
  
  const [drillUpdated, setDrillUpdated] = useState({
    id: '',
    title: '',
    description: '',
    observations: '',
    classPlanId: '',
  });

  async function loadData() {
    if (id != null) {
      const response = await classPlan.getById(id);
      setplanUpdated(response.data);
    }
  }

  async function loadDataDrill() {
    if (idDrill != null) {
      const response = await drill.getById(idDrill);
      setDrillUpdated(response.data);
    }
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
      let data = {
        title: titleDrill,
        description: descriptionDrill,
        observations: observationsDrill,
        classPlanId: id,
      };
      if (!titleDrill) toast.warning('Preencha o campo do título');
      else if (titleDrill.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        await drill.save(data);
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
      toast.success('Drill excluído com sucesso');
      closeDeleteItemPanel();
      setDeletedItem('');
    } catch (error) {
      toast.error('Erro ao excluir drill');
    }
    return;
  };

  useEffect(() => {
    loadData();
    if (id != null) {
      drill
        .getManyByClassPlanId(id)
        .then((response) => {
          setDrills(response.data);
        })
        .catch(() => {
          setDrills([]);
        });
    }
  }, [id, drill]);

  useEffect(() => {
    loadData();
    setTitle(planUpdated.title);
    setGoals(planUpdated.goals);
    setObservations(planUpdated.observations);
  }, [planUpdated]);

  useEffect(() => {
    loadDataDrill();
    setTitleDrill(drillUpdated.title);
    setDescriptionDrill(drillUpdated.description);
    setObservationsDrill(drillUpdated.observations);
  }, [drillUpdated]);

  

  const startEditingTitle = () => {
    setTitleAux(planUpdated.title);
    setTitleNotEdited(false);
  };

  const startEditingDescription = () => {
    setGoalsAux(planUpdated.goals);
    setGoalsNotEdited(false);
  };

  const startEditingObservations = () => {
    setObservationsAux(planUpdated.observations);
    setObservationsNotEdited(false);
  };

  const finishEditingTitle = async () => {
    try {
      if (!titleAux) toast.warning('Preencha o campo do título');
      else if (titleAux.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        let data = {
          id: planUpdated.id,
          title: titleAux,
          goals: planUpdated.goals,
          observations: planUpdated.observations,
          userId: planUpdated.userId,
        };
        setTitleNotEdited(true);
        setTitleAux('');
        await classPlan.updateById(planUpdated.id, data);
        toast.success('Título atualizado com sucesso');
      }
    } catch (error) {
      toast.error('Erro ao atualizar drill');
      setTitleNotEdited(true);
      setTitleAux('');
    }
    return;
  };

  const finishEditingDescription = async () => {
    try {
      let data = {
        id: planUpdated.id,
        title: planUpdated.title,
        goals: goalsAux,
        observations: planUpdated.observations,
        userId: planUpdated.userId,
      };
      await classPlan.updateById(planUpdated.id, data);
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
        id: planUpdated.id,
        title: planUpdated.title,
        goals: planUpdated.goals,
        observations: observationsAux,
        userId: planUpdated.userId,
      };
      await classPlan.updateById(planUpdated.id, data);
      toast.success('Observações atualizadas com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar drill');
    } finally {
      setObservationsAux('');
      setObservationsNotEdited(true);
    }
    return;
  };
 


  // ... (other imports)
  
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
      planDiv.innerHTML = `
        <center><h1>${planUpdated.title}</h1></center>
        <br></br>
        <h2>Objetivos</h2>
        <p>${planUpdated.goals}</p>
        <br></br>
        <h2>Observações</h2>
        <p>${planUpdated.observations}</p>
        <br></br>
        <center><h1>Drills</h1></center>
      `;
      container.appendChild(planDiv);
  
      // Adicionar os dados dos drills ao HTML
      drillResponses.forEach((response) => {
        const drillData = response.data;
        const drillDiv = document.createElement('div');
        drillDiv.innerHTML = `
          <br></br>
          <h1>${drillData.title}</h2>
          <br></br>
          <h1>Descrição</h1>
          <p>${drillData.description}</p>
          <br></br>
          <h1>Observações</h2>
          <p>${drillData.observations}</p>
        `;
        container.appendChild(drillDiv);
      });
  
      // Configurar as opções do html2pdf
      const options = {
        margin: 10,
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
      <Header path={''} hasReturnArrow={true} />
      <div style={{ backgroundColor: '#272727'}}>
      {titleNotEdited ? (
          <div className="titleLayout" style={{ justifyContent: 'center' }}>
            {' '}
            <div className="plan" key={planUpdated.id}>
              <h1
                style={{
                  fontSize: '50px',
                  padding: '10px 0',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}
              >
                {title}
              </h1>{' '}
            </div>
            <Icon
              icon="ph:pencil"
              color="white"
              width="25px"
              onClick={startEditingTitle}
              className="clickableIcon"
            />{' '}
            <button onClick={downloadPlan} className="downloadButton">
              <Icon icon="bi:download" color="white" width="20" />
              Baixar Plano de Aula
            </button>

          </div>
        ) : (
          <div className="titleLayout" style={{ justifyContent: 'center' }}>
            {' '}
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
        <div className="contentDrill" id="descObsContainer">
          <div className="titleLayout">
              <p style={{marginLeft: '3em', fontSize: '3em' }}>Objetivos</p>
              {goalsNotEdited ? (
                <Icon
                  icon="ph:pencil"
                  color="white"
                  width="25px"
                  className="clickableIcon"
                  onClick={startEditingDescription}
                />
              ) : (
                <Icon
                  icon="iconamoon:check-fill" 
                  color="white"
                  width="25px"
                  onClick={finishEditingDescription}
                  className="clickableIcon"
                  />
                  )}
          </div>
              <div
                className="card space-y-4"
                style={{
                  backgroundColor: 'gray',
                  padding: '5em',
                  marginLeft: '5em',
                  marginRight: '5em',
                  borderRadius: '1em',
                  marginTop: '5em',
                  color: 'white'
                }}>
            {goalsNotEdited ? (
              <p style={{ fontSize: '2em' }}>
                {goals}
              </p>
            ) : (
              <textarea
                className="card space-y-4 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setGoalsAux(e.target.value)}
                maxLength={500}
                value={goalsAux}
              />
            )}
            </div>
        </div>        
          <div className="contentPlan" id="descObsContainer">
            <div className="titleLayout" style={{marginTop: "3em"}}>
                <p style={{ marginLeft: '3em', fontSize: '3em' }}>Observações</p>
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
              <div
                className="card space-y-4"
                style={{
                  backgroundColor: 'gray',
                  padding: '5em',
                  marginLeft: '5em',
                  marginRight: '5em',
                  borderRadius: '1em',
                  marginTop: '5em',
                  color: 'white'
                }}>
            {observationsNotEdited ? (
              <p style={{ fontSize: '2em' }}>
                {observations}
              </p>
            ) : (
              <textarea
                className="card space-y-4 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setObservationsAux(e.target.value)}
                maxLength={500}
                value={observationsAux}
              />
            )}
            </div>
          </div>




          <h1 style={{ fontSize: '30px', color: 'white', padding: '10px 0',  marginTop: '2em',  marginBottom: '1em'}}>
            Drills
          </h1>
          <div className="buttonsPanel">
            <button className="addButton" onClick={openNewItemPanel}>
              <Icon icon="simple-line-icons:plus" color="white" width="40" />
            </button>
            <br></br>
            {drills.length > 0 &&
              drills.map((a) => {
                return (
                  <div id={a['id']} key={a['id']} className="itemButton">
                    <Link to={`/drill/${a['id']}`}>
                      <h1 className="clickableTitle">{a['title']}</h1>
                    </Link>
                    <Icon
                      icon="mdi:trash"
                      color="white"
                      width="20"
                      key={a['id']}
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '20px',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setDeletedItemTitle(a['title']);
                        setDeletedItem(a['id']);
                        openDeletePanel();
                      }}
                    />
                  </div>
                );
              })}
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
