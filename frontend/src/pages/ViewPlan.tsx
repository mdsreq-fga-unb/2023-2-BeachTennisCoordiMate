import '../index.css';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import ClassPlanService from '../service/classPlanService';
import { Link, useParams } from 'react-router-dom';
import DrillService from '../service/drillService';
import { toast } from 'react-toastify';

const ViewPlan = () => {
  const { id } = useParams();
  const userString = localStorage.getItem('user');
  let userId: string;

  if (userString !== null) {
    const user = JSON.parse(userString);
    userId = user.id;
  } else {
    userId = '';
  }

  const [titleDrill, setTitleDrill] = useState('');
  const [visibleCreateDrill, setVisibleCreateDrill] = useState(false);
  const [visibleDeleteDrill, setVisibleDeleteDrill] = useState(false);
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [drills, setDrills] = useState([]);
  const drill = new DrillService();

  let data = {
    title: titleDrill,
    description: '',
    observations: '',
    classPlanId: id,
  };

  const [title] = useState('');
  const classPlan = new ClassPlanService();
  const [plan, setPlan] = useState({
    id: '',
    title: title,
    goals: '',
    observations: '',
    userId: userId,
  });

  async function loadData() {
    if (id != null) {
      const response = await classPlan.getById(id);
      setPlan(response.data);
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

  return (
    <>
      <Header path={''} hasReturnArrow={true} />
      <div className="page">
        <div className="plan" key={plan.id}>
          <h1
            style={{
              color: 'white',
              padding: '10px 0',
              textAlign: 'center',
            }}
          >
            {plan.title}
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '90%' }}>
            <h1 style={{ paddingRight: '10px' }}>Objetivos</h1>
          </div>
          <p className="pClassPlan">{plan.goals}</p>
          <br></br>
          <div style={{ width: '90%' }}>
            <h1 style={{ paddingRight: '10px' }}>Observações</h1>
          </div>
          <p className="pClassPlan">{plan.observations}</p>
          <br></br>
        </div>
        <div>
          <h1 style={{ fontSize: '30px', color: 'white', padding: '10px 0' }}>
            Drills
          </h1>
          <div className="buttonsPanel">
            <button
              className="addButton" 
              onClick={openNewItemPanel}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                <path fill="white" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"/>
              </svg>
            </button>
            {drills.length > 0 &&
              drills.map((a) => {
                return (
                  <div id={a['id']} key={a['id']} className="itemButton">
                    <Link to={`/drill/${a['id']}`}>
                      <h1 className="clickableTitle">{a['title']}</h1>
                    </Link>
                    <button
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
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="white" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>
                      </svg>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        {visibleCreateDrill && (
          <div className="panelHandleItem" style={{ zIndex: 5 }}>
            <div className="upContainer">
              <h1>Criar Drill</h1>
              <button
                className="clickableIcon"
                onClick={closeNewItemPanel}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
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
              <button
                onClick={closeDeleteItemPanel}
                className="clickableIcon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
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
              onClick={handleDeleteDrill}
            >
              Excluir
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewPlan;
