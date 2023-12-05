import { useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import ClassPlanService from '../service/classPlanService';

const ClassPlans = () => {
  const userString = localStorage.getItem('user');
  let id;
  if (userString !== null) {
    const user = JSON.parse(userString);
    id = user.id;
  } else {
    id = '';
  }
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const classPlan = new ClassPlanService();
  let data = {
    title: title,
    goals: '',
    observations: '',
    userId: id 
  };

  const addClassPlan = () => {
    setVisible(true);
    setTitle('');
  }

  const closeNewItemPanel = () => {
    setVisible(false);
    setTitle('');
  }
  
  const handleCreateClassPlan = async () => {
    try {
      if (!title)
        toast.warning('Preencha o campo do título');
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
  return (
    <>
      <ToastContainer toastStyle={{backgroundColor: "#272727", color: "white"}} closeButton={<Icon icon="tabler:x" color="white" width="15px"/>}/>
      <div className="buttonsPages" >
          <div className='containerVisibleComp'>
            <h1 style={{fontSize: "30px", color: "white", padding: "10px 0"}}>Meus Planos de Aula</h1>
            <div className='buttonsPanel'>
                <button className="addButton" onClick={addClassPlan}>
                    <Icon icon="simple-line-icons:plus" color="white" width="40"/>
                </button>
            </div>
          </div>
        {visible && <div id="panelNewItem">
          <div className="upContainer">
            <h1>Criar Plano de Aula</h1>
            <Icon onClick={closeNewItemPanel} icon="tabler:x" id="closeIcon" color="white" width="30"/>
          </div>
          <input placeholder='Título' style={{backgroundColor: "#292222", height: "30px", width: "250px", borderRadius: "10px", paddingLeft: "5px", color: "white", border: "1px solid black"}} onChange={(e) => setTitle(e.target.value)}></input>
          <button style={{backgroundColor: "#1B74E4", padding: "5px 20px", borderRadius: "10px", border: "1px solid black"}} onClick={handleCreateClassPlan}>Criar</button>
        </div>}
      </div>
    </>
  );
};
  
export default ClassPlans;