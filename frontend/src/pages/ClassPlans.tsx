import { useEffect, useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import ClassPlanService from '../service/classPlanService';
import { Link} from 'react-router-dom';
import Header from '../components/Header';
import html2pdf from 'html2pdf.js';

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

  useEffect(() => {
    loadPlans();
  }, []);

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
  const [plans, setPlans] = useState([data]);

  async function loadPlans() {
    const response = await classPlan.get('/');
    setPlans(response.data);
  }

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
  console.log(classPlans);



  const downloadPlan = async (planData: any) => {
    try {
      // Carregar todos os drills relacionados ao plano de aula
      const { title, goals, observations } = planData;  
  
      // Criar um elemento HTML para representar o plano de aula e os drills
      const container = document.createElement('div');
  
      // Adicionar os dados do plano de aula ao HTML
      const planDiv = document.createElement('div');
      planDiv.innerHTML = `
          <center><h1 style="color: black; font-size: 2em; margin-top: 1em;">${title}</h1></center>
          <br></br>
          <h2 key={id} style="color: blue; font-size: 2em;">Objetivos</h2>
          <p style="color: black;">${goals}</p>
          <br></br>
          <h2 style="color: blue; font-size: 2em;">Observações</h2>
          <p style="color: black;">${observations}</p>
          <br></br>
          <h1 style="color: blue; font-size: 2em">Drills</h1>
         `;
      container.appendChild(planDiv);
  
      // Adicionar os dados dos drills ao HTML
     
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
                    
                    <button
                        onClick={() => downloadPlan(a)}
                        className="downloadButton"
                        style={{ marginTop: '1em' }}
                      >
                        <Icon icon="bi:download" color="white" width="20" />
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