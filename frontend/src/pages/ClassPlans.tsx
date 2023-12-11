import { useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import ClassPlanService from '../service/classPlanService';
import Header from '../components/Header';
import DrillService from '../service/drillService';

const ClassPlans = () => {
  const userClassPlans = localStorage.getItem('userClassPlans');
  const [classPlans, setClassPlans] = useState(
    JSON.parse(userClassPlans ? userClassPlans : ''),
  );
  const userString = localStorage.getItem('user');
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [visibleDel, setVisibleDel] = useState(false);
  const [searchedTitle, setSearchedTitle] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  let id: String;
  if (userString !== null) {
    const user = JSON.parse(userString);
    id = String(user.id);
  } else {
    id = '';
  }

  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const classPlan = new ClassPlanService();
  const drill = new DrillService();

  let data = {
    id: '',
    title: title,
    goals: '',
    observations: '',
    userId: id,
  };

  const addClassPlan = () => {
    setVisible(true);
    setTitle('');
    setVisibleDel(false);
  };

  const closeNewItemPanel = () => {
    setVisible(false);
    setTitle('');
  };

  const handleCreateClassPlan = async () => {
    try {
      if (!title) toast.warning('Preencha o campo do título');
      else if (title.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        let newClassPlanData = await classPlan.save(data);
        setClassPlans((prevArray) => [...prevArray, newClassPlanData.data]);
        toast.success('Plano de aula cadastrado com sucesso');
        closeNewItemPanel();
        setTitle('');
      }
    } catch (error) {
      toast.error('Erro ao cadastrar plano de aula');
    }
    return;
  };

  const openDeletePanel = () => {
    setVisible(false);
    setTitle('');
    setVisibleDel(true);
  };

  const closeDeleteItemPanel = () => {
    setVisibleDel(false);
  };

  const handleDeleteClassPlan = async () => {
    try {
      await classPlan.remove(deletedItem);
      setClassPlans((prevItems) =>
        prevItems.filter((item) => item.id != deletedItem),
      );
      toast.success('Plano de aula excluído com sucesso');
      closeDeleteItemPanel();
      setDeletedItem('');
    } catch (error) {
      toast.error('Erro ao excluir plano de aula');
    }
    return;
  };

  const redirectToViewPlan = async (selectedId: string) => {
    try {
      const response = await classPlan.getById(selectedId);
      localStorage.setItem('selectedClassPlan', JSON.stringify(response.data));
      const drillsClassPlan = await drill.getManyByClassPlanId(selectedId);
      const drillData = drillsClassPlan.data;
      localStorage.setItem(
        'drillsSelectedClassPlan',
        JSON.stringify(drillData),
      );
      setTimeout(() => {
        window.location.href = `/plano-aula/${selectedId}`;
      }, 3000);
    } catch (error) {
      toast.error('Erro ao buscar informações do plano');
    }
  };

  const searchClassPlans = async () => {
    try {
      let tit_proc, data_ini_proc, data_final_proc;
      if (searchedTitle) {
        tit_proc = searchedTitle;
        if ((initialDate && !finalDate) || (!initialDate && finalDate)) {
          toast.warning(
            'Preencha os dois campos de data ou limpe os dois caso deseje pesquisar apenas por título',
          );
          return;
        }
        if (initialDate) {
          data_ini_proc = initialDate;
          data_final_proc = finalDate;
        } else {
          data_ini_proc = '_';
          data_final_proc = '_';
        }
      } else if (initialDate || finalDate) {
        if (!finalDate || !initialDate) {
          toast.warning(
            'Preencha os dois campos de data caso deseje pesquisar pela data de criação',
          );
          return;
        }
        tit_proc = '_';
        data_ini_proc = initialDate;
        data_final_proc = finalDate;
      } else {
        toast.warning(
          'Preencha os campos para pesquisar por título, data de criação ou pelos dois filtros',
        );
        return;
      }
      let userClassPlans = await classPlan.getManyByTitleOrDate(
        id as string,
        tit_proc,
        data_ini_proc,
        data_final_proc,
      );
      console.log(userClassPlans.data);
      localStorage.setItem(
        'userClassPlans',
        JSON.stringify(userClassPlans.data),
      );
      toast.success('Pesquisa realizada com sucesso!');
      setTimeout(() => {
        window.location.href = '/pesquisa';
      }, 3000);
    } catch (error) {
      toast.error('Erro ao procurar planos');
    }
  };

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: '#272727', color: 'white' }}
        closeButton={<Icon icon="tabler:x" color="white" width="15px" />}
      />
      <Header changeScreenFunction={() => {}} hasReturnArrow={false}></Header>
      <div className="buttonsPagesClassPlans">
        <div className="containerVisibleComp">
          <h1 style={{ fontSize: '30px', color: 'white', padding: '10px 0' }}>
            Meus Planos de Aula
          </h1>
          <div className="searchClassPlanPanel">
            <div>
              <p style={{ color: 'white' }}>Título</p>
              <input
                placeholder="Pesquise pelo nome"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                style={{
                  backgroundColor: '#292222',
                  height: '30px',
                  borderRadius: '10px',
                  paddingLeft: '5px',
                  color: 'white',
                }}
                onChange={(e) => setSearchedTitle(e.target.value)}
              ></input>
            </div>
            <div>
              <p style={{ color: 'white' }}>Data Início</p>
              <input
                className="datepickerbg w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                type="date"
                style={{
                  backgroundColor: '#292222',
                  height: '30px',
                  borderRadius: '10px',
                  paddingLeft: '5px',
                  color: 'white',
                  paddingRight: '0px',
                }}
                onChange={(e) => setInitialDate(e.target.value)}
              ></input>
            </div>
            <div>
              <p style={{ color: 'white' }}>Data Fim</p>
              <input
                className="datepickerbg w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                type="date"
                style={{
                  backgroundColor: '#292222',
                  height: '30px',
                  borderRadius: '10px',
                  paddingLeft: '5px',
                  color: 'white',
                  paddingRight: '0px',
                }}
                onChange={(e) => setFinalDate(e.target.value)}
              ></input>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                style={{
                  backgroundColor: '#1B74E4',
                  boxSizing: 'content-box',
                  padding: '5px 20px',
                  borderRadius: '10px',
                  border: '1px solid black',
                  color: 'white',
                  height: '30px',
                }}
                onClick={searchClassPlans}
              >
                Pesquisar
              </button>
            </div>
          </div>
          <div className="buttonsPanel">
            <button className="addButton" onClick={addClassPlan}>
              <Icon icon="simple-line-icons:plus" color="white" width="40" />
            </button>
            {classPlans.length > 0 &&
              classPlans.map((a) => {
                return (
                  <div id={a['id']} key={a['id']} className="itemButton">
                    <button
                      onClick={() => {
                        redirectToViewPlan(a['id']);
                      }}
                    >
                      <h1 className="clickableTitle">{a['title']}</h1>
                    </button>
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
        {visible && (
          <div className="panelHandleItem">
            <div className="upContainer">
              <h1>Criar Plano de Aula</h1>
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
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              style={{
                backgroundColor: '#292222',
                height: '30px',
                width: '250px',
                borderRadius: '10px',
                paddingLeft: '5px',
                color: 'white',
              }}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <button
              style={{
                backgroundColor: '#1B74E4',
                padding: '5px 20px',
                borderRadius: '10px',
                border: '1px solid black',
              }}
              onClick={handleCreateClassPlan}
            >
              Criar
            </button>
          </div>
        )}
        {visibleDel && (
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
              onClick={handleDeleteClassPlan}
            >
              Excluir
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ClassPlans;
