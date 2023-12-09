import { useEffect, useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import ClassPlanService from '../service/classPlanService';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ClassPlans = () => {
  const [classPlans, setClassPlans] = useState([]);
  const userString = localStorage.getItem('user');
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [visibleDel, setVisibleDel] = useState(false);
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
        await classPlan.save(data);
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
      toast.success('Plano de aula excluído com sucesso');
      closeDeleteItemPanel();
      setDeletedItem('');
    } catch (error) {
      toast.error('Erro ao excluir plano de aula');
    }
    return;
  };

  useEffect(() => {
    console.log(id);
    if (id != '') {
      classPlan
        .getManyById(id as string)
        .then((response) => {
          setClassPlans(response.data);
        })
        .catch(() => {
          setClassPlans([]);
        });
    }
  }, [classPlan, id]);

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: '#272727', color: 'white' }}
        closeButton={<Icon icon="tabler:x" color="white" width="15px" />}
      />
      <Header path="" hasReturnArrow={false}></Header>
      <div className="buttonsPagesClassPlans">
        <div className="containerVisibleComp">
          <h1 style={{ fontSize: '30px', color: 'white', padding: '10px 0' }}>
            Meus Planos de Aula
          </h1>
          <div className="buttonsPanel">
            <button className="addButton" onClick={addClassPlan}>
              <Icon icon="simple-line-icons:plus" color="white" width="40" />
            </button>
            {classPlans.length > 0 &&
              classPlans.map((a) => {
                return (
                  <div id={a['id']} key={a['id']} className="itemButton">
                    <Link
                      to={`/plano-aula/${a['id']}`}
                      state={{ drillInfo: a }}
                    >
                      <h1 className="clickableTitle">{a['title']}</h1>
                    </Link>
                    <button
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
                      }} >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24"
                        key={a['id']}>
                        <path fill="white" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>
                      </svg>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        {visible && (
          <div className="panelHandleItem">
            <div className="upContainer">
              <h1>Criar Plano de Aula</h1>
              <button
                onClick={closeNewItemPanel}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" className="clickableIcon"/>
                </svg>
              </button>
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
              <button
                onClick={closeDeleteItemPanel}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" className="clickableIcon"/>
                  </svg>
              </button>
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
