import { useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import DrillService from '../service/drillService';
import { useLocation } from 'react-router-dom';

const Drill = () => {
    const location = useLocation();
    const { drillInfo } = location.state;
    const [title, setTitle] = useState(drillInfo["title"]);
    const [titleAux, setTitleAux] = useState('');
    const [description, setDescription] = useState(drillInfo["description"]);
    const [descriptionAux, setDescriptionAux] = useState('');
    const [observations, setObservations] = useState(drillInfo["observations"]);
    const [observationsAux, setObservationsAux] = useState('');
    const [titleNotEdited, setTitleNotEdited] = useState(true);
    const [descriptionNotEdited, setDescriptionNotEdited] = useState(true);
    const [observationsNotEdited, setObservationsNotEdited] = useState(true);
    const drill = new DrillService();

    const startEditingTitle = () => {
        setTitleAux(title);
        setTitleNotEdited(false);
    }

    const startEditingDescription = () => {
        setDescriptionAux(description);
        setDescriptionNotEdited(false);
    }

    const startEditingObservations = () => {
        setObservationsAux(observations);
        setObservationsNotEdited(false);
    }
  
    const finishEditingTitle = async () => {
        try {
            if (!titleAux)
                toast.warning('Preencha o campo do título');
            else if (titleAux.length < 5)
                toast.warning('O título deve ter no mínimo 5 caracteres');
            else {
                let data = {
                    id: drillInfo["id"],
                    title: titleAux,
                    description: description,
                    observations: observations,
                    classPlanId: drillInfo["classPlanId"] 
                };
                setTitle(titleAux);
                setTitleNotEdited(true);
                setTitleAux('');
                await drill.updateById(drillInfo["id"], data);
                toast.success('Título atualizado com sucesso');
            }
        } catch (error) {
            toast.error('Erro ao atualizar drill');
            setTitleNotEdited(true);
            setTitleAux('');
        }
        return;
    }

    const finishEditingDescription = async () => {
        try {
            let data = {
                id: drillInfo["id"],
                title: title,
                description: descriptionAux,
                observations: observations,
                classPlanId: drillInfo["classPlanId"] 
            };
            setDescription(descriptionAux);
            await drill.updateById(drillInfo["id"], data);
            toast.success('Descrição atualizada com sucesso');
        } catch (error) {
            toast.error('Erro ao atualizar drill');
        } finally{
            setDescriptionAux('');
            setDescriptionNotEdited(true);
        }
        return;
    }

    const finishEditingObservations = async () => {
        try {
            setObservations(observationsAux);
            setObservationsAux('');
            let data = {
                id: drillInfo["id"],
                title: title,
                description: description,
                observations: observationsAux,
                classPlanId: drillInfo["classPlanId"] 
            };
            await drill.updateById(drillInfo["id"], data);
            toast.success('Observações atualizadas com sucesso');
        } catch (error) {
            toast.error('Erro ao atualizar drill');
        } finally{
            setObservationsAux('');
            setObservationsNotEdited(true);
        }
        return;
    }

  return (
    <>
      <ToastContainer toastStyle={{backgroundColor: "#272727", color: "white"}} closeButton={<Icon icon="tabler:x" color="white" width="15px" className="clickableIcon"/>}/>
      <div className="drillPage">
            {titleNotEdited ? <div className='titleLayout' style={{justifyContent: "center"}}>  <h1 style={{paddingRight: "10px", overflow: "hidden"}}>{title}</h1>  <Icon icon="ph:pencil" color="white" width="25px" onClick={startEditingTitle} className="clickableIcon"/> </div> : <div className='titleLayout' style={{justifyContent: "center"}}>  <input className='inputsDrill' id='inputTitle' style={{marginRight: "10px"}} onChange={(e) => setTitleAux(e.target.value)} maxLength={50} value={titleAux}/> <Icon icon="iconamoon:check-fill" color="white" width="25px" onClick={finishEditingTitle} className="clickableIcon"/> </div>}
           
        <div className='contentDrill' id='descObsContainer'>
            <div className='titleLayout'>
                <h1 style={{paddingRight: "10px"}}>Descrição</h1>
                {descriptionNotEdited ? <Icon icon="ph:pencil" color="white" width="25px" className="clickableIcon" onClick={startEditingDescription}/> : <Icon icon="iconamoon:check-fill" color="white" width="25px" onClick={finishEditingDescription} className="clickableIcon"/>}
            </div>
            {descriptionNotEdited ? <p className='pDrill' style={{margin: "10px 0 20px 0"}}>{description}</p> :  <textarea className='textAreaDrill' onChange={(e) => setDescriptionAux(e.target.value)} maxLength={500} value={descriptionAux}/>}
            <div className='titleLayout'> 
                <h1 style={{paddingRight: "10px"}}>Observações</h1>
                {observationsNotEdited ? <Icon icon="ph:pencil" color="white" width="25px" className="clickableIcon" onClick={startEditingObservations}/> : <Icon icon="iconamoon:check-fill" color="white" width="25px" onClick={finishEditingObservations} className="clickableIcon"/>}
            </div>
            {observationsNotEdited ? <p className='pDrill'>{observations}</p> :  <textarea className='textAreaDrill' onChange={(e) => setObservationsAux(e.target.value)} maxLength={500} value={observationsAux}/>}
        </div>
      </div>   
    </>
  );
};
  
export default Drill;