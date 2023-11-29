import { useState, useEffect } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import DrillService from '../service/drillService';

const Drills = () => {
  const classPlanId = '48ba4b70-bc5d-4351-9eff-ce7d2cea74e7'; //Valor fixo
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleDel, setVisibleDel] = useState(false);
  const [deletedItem, setDeletedItem] = useState('');
  const [deletedItemTitle, setDeletedItemTitle] = useState('');
  const [drills, setDrills] = useState([]);
  const drill = new DrillService();
  let data = {
    title: title,
    description: '',
    observations: '',
    classPlanId: classPlanId
  };
  
  const openNewItemPanel = () => {
    setVisible(true);
    setTitle('');
    setVisibleDel(false);
  }

  const closeNewItemPanel = () => {
    setVisible(false);
    setTitle('');
  }

  const closeDeleteItemPanel = () => {
    setVisibleDel(false);
  }

  const openDeletePanel = () => {
    setVisible(false);
    setTitle('');
    setVisibleDel(true);
  }
  
  const handleCreateDrill = async () => {
    try {
      if (!title)
        toast.warning('Preencha o campo do título');
      else if (title.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        await drill.save(data);
        toast.success('Drill cadastrado com sucesso');
        closeNewItemPanel();
        setTitle('');
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
    drill
      .getManyByClassPlanId(classPlanId)
      .then((response) => {
        setDrills(response.data);
      })
      .catch(() => {
        setDrills([]);
      });
  }, [drill, classPlanId])

  return (
    <>
      <ToastContainer toastStyle={{backgroundColor: "#272727", color: "white"}} closeButton={<Icon icon="tabler:x" color="white" width="15px"/>}/>
      <div className="buttonsPages">
          <div className='containerVisibleComp'>
            <h1 style={{fontSize: "30px", color: "white", padding: "10px 0"}}>Drills</h1>
            <div className='buttonsPanel'>
                <button className="addButton" onClick={openNewItemPanel}>
                    <Icon icon="simple-line-icons:plus" color="white" width="40"/>
                </button>
                {drills.length > 0 && drills.map((a) => {
                  return <div id={a["id"]} key={a["id"]} className="itemButton">
                  <h1>{a["title"]}</h1>
                    <Icon icon="mdi:trash" color="white" width="20" key={a["id"]} style={{position: 'absolute', bottom: '0', right: '20px', cursor: 'pointer'}} onClick = {()=> {
                      setDeletedItemTitle(a["title"]);
                      setDeletedItem(a["id"]);
                      openDeletePanel();
                      }}/>
                  </div>;
                })}
            </div>
          </div>
        {visible && <div id="panelHandleItem">
          <div className="upContainer">
            <h1>Criar Drill</h1>
            <Icon onClick={closeNewItemPanel} icon="tabler:x" id="closeIcon" color="white" width="30"/>
          </div>
          <input placeholder='Título' style={{backgroundColor: "#292222", height: "30px", width: "250px", borderRadius: "10px", paddingLeft: "5px", color: "white", border: "1px solid black"}} onChange={(e) => setTitle(e.target.value)}></input>
          <button style={{backgroundColor: "#1B74E4", padding: "5px 20px", borderRadius: "10px", border: "1px solid black"}} onClick={handleCreateDrill}>Criar</button>
        </div>}
        {visibleDel && <div id="panelHandleItem" style={{padding:"3px 0px 10px 0px"}}>
          <div className="upContainer" style={{justifyContent: "flex-end"}}>
            <Icon onClick={closeDeleteItemPanel} icon="tabler:x" id="closeIcon" color="white" width="30"/>
          </div>
          <h1 style={{textAlign:"center"}}>Tem certeza que deseja excluir "{deletedItemTitle}"?</h1>
          <button style={{backgroundColor: "#1B74E4", padding: "5px 20px", borderRadius: "10px", border: "1px solid black"}} onClick={handleDeleteDrill}>Excluir</button>
        </div>}
      </div>
    </>
  );
};
  
export default Drills;