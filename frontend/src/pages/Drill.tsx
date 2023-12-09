import { useEffect, useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import DrillService from '../service/drillService';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import DrillElement from '../components/DrillElement';
import arco from "../images/drillElements/arco.png";
import avatar_x_neg from "../images/drillElements/avatar_x-.png";
import avatar_x_pos from "../images/drillElements/avatar_x+.png";
import avatar_y_neg from "../images/drillElements/avatar_y-.png";
import avatar_y_pos from "../images/drillElements/avatar_y+.png";
import bola_tenis from "../images/drillElements/bola_tenis.png";
import cano_alt_x from "../images/drillElements/cano_alt_x.png";
import cano_alt_y from "../images/drillElements/cano_alt_y.png";
import cone from "../images/drillElements/cone.png";
import seta_x_neg from "../images/drillElements/seta_x-.png";
import seta_x_pos from "../images/drillElements/seta_x+.png";
import seta_y_neg from "../images/drillElements/seta_y-.png";
import seta_y_pos from "../images/drillElements/seta_y+.png";
import DrillElementService from '../service/drillElementService';

const Drill = () => {
  const listImages = [
    arco,
    avatar_x_neg,
    avatar_x_pos,
    avatar_y_neg,
    avatar_y_pos,
    bola_tenis,
    cano_alt_x,
    cano_alt_y,
    cone,
    seta_x_neg,
    seta_x_pos,
    seta_y_neg,
    seta_y_pos
  ];
  const listButtons = [
    [0, 50, arco, 35],
    [1, 30, avatar_x_neg, 15],
    [2, 30, avatar_x_pos, 14],
    [3, 30, avatar_y_neg, 14],
    [4, 30, avatar_y_pos, 14],
    [5, 15, bola_tenis, 20],
    [6, 50, cano_alt_x, 30],
    [7, 50, cano_alt_y, 30],
    [8, 30, cone, 25],
    [9, 30, seta_x_neg, 25],
    [10, 30, seta_x_pos, 25],
    [11, 30, seta_y_neg, 25],
    [12, 30, seta_y_pos, 25]
  ]
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [titleAux, setTitleAux] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionAux, setDescriptionAux] = useState('');
  const [observations, setObservations] = useState('');
  const [observationsAux, setObservationsAux] = useState('');
  const [titleNotEdited, setTitleNotEdited] = useState(true);
  const [descriptionNotEdited, setDescriptionNotEdited] = useState(true);
  const [observationsNotEdited, setObservationsNotEdited] = useState(true);
  const drill = new DrillService();
  const drillElement = new DrillElementService();
  const [drillUpdated, setDrillUpdated] = useState({
    id: '',
    title: '',
    description: '',
    observations: '',
    classPlanId: '',
  });
  const [newItems, setNewItems] = useState(Array<[string, number, number]>);
  const [savedItems, setSavedItems] = useState([{
    id: 'id0',
    index: 0,
    left: 0,
    top: 0
  }]
  );
  const [deletedSavedIds, setDeletedSavedIds] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  
  const addDrillElement = (typeImage : number, width: number) => {
    setNewItems([...newItems, [String(count), typeImage, width]]);
    setCount(count + 1);
  }

  const deleteNewItem = (idDeleted : string) => { 
    setNewItems((prevItems) => prevItems.filter((id) => id[0] !== idDeleted));   
  }

  const deleteSavedItem = (idDeleted: string) => {
    const node = document.getElementById(idDeleted);
    if(node){
      node.style.display = 'none';
      setDeletedSavedIds((prevArray) => [...prevArray, idDeleted]);
    }
  }
  
  async function saveDrillState(){
    for(const [idNewItem, indexNewItem] of newItems){
      try{
        const element = document.getElementById(idNewItem);
        if(element != null){
          let data = {
            index: indexNewItem,
            top: parseInt(element.style.top.slice(0, -2)),
            left: parseInt(element.style.left.slice(0, -2)),
            drillId: id
          };
          await drillElement.save(data);
        }
      } catch (error) {
        toast.error('Erro ao salvar elementos');
        return;
      }   
    }
    for(const savedItem of savedItems){
      try{
        const element = document.getElementById(savedItem.id);
        if(element != null){
          let data = {
            id: savedItem.id,
            index: savedItem.index,
            top: parseInt(element.style.top.slice(0, -2)),
            left: parseInt(element.style.left.slice(0, -2)),
            drillId: id
          };
          await drillElement.updateById(savedItem.id, data);
        }
      } catch (error) {
        toast.error('Erro ao salvar elementos');
        return;
      }   
    }
    for(const deletedSavedId of deletedSavedIds){
      try{
        await drillElement.deleteById(deletedSavedId);
      } catch (error) {
        toast.error('Erro ao salvar elementos');
        return;
      }   
    }
    toast.success('Atualizações no desenho do drill salvas com sucesso');
    setNewItems([]);
    const trash = document.getElementById('apagar');
    if (trash) trash.style.visibility = 'hidden';
  }

  async function loadData() {
    if (id != null) {
      const response = await drill.getById(id);
      setDrillUpdated(response.data);
    }
  }

  useEffect(() => {
    loadData();
    setTitle(drillUpdated.title);
    setDescription(drillUpdated.description);
    setObservations(drillUpdated.observations);
    if (id != null) {
      drillElement
        .getManyByDrillId(id)
        .then((response) => {
          setSavedItems(response.data);
        })
        .catch(() => {
          setSavedItems([]);
        });
    }
  }, [drillUpdated]);

  const startEditingTitle = () => {
    setTitleAux(drillUpdated.title);
    setTitleNotEdited(false);
  };

  const startEditingDescription = () => {
    setDescriptionAux(drillUpdated.description);
    setDescriptionNotEdited(false);
  };

  const startEditingObservations = () => {
    setObservationsAux(drillUpdated.observations);
    setObservationsNotEdited(false);
  };

  const finishEditingTitle = async () => {
    try {
      if (!titleAux) toast.warning('Preencha o campo do título');
      else if (titleAux.length < 5)
        toast.warning('O título deve ter no mínimo 5 caracteres');
      else {
        let data = {
          id: drillUpdated.id,
          title: titleAux,
          description: drillUpdated.description,
          observations: drillUpdated.observations,
          classPlanId: drillUpdated.classPlanId,
        };
        setTitleNotEdited(true);
        setTitleAux('');
        await drill.updateById(drillUpdated.id, data);
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
        id: drillUpdated.id,
        title: drillUpdated.title,
        description: descriptionAux,
        observations: drillUpdated.observations,
        classPlanId: drillUpdated.classPlanId,
      };
      await drill.updateById(drillUpdated.id, data);
      toast.success('Descrição atualizada com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar drill');
    } finally {
      setDescriptionAux('');
      setDescriptionNotEdited(true);
    }
    return;
  };

  const finishEditingObservations = async () => {
    try {
      setObservationsAux('');
      let data = {
        id: drillUpdated.id,
        title: drillUpdated.title,
        description: drillUpdated.description,
        observations: observationsAux,
        classPlanId: drillUpdated.classPlanId,
      };
      await drill.updateById(drillUpdated.id, data);
      toast.success('Observações atualizadas com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar drill');
    } finally {
      setObservationsAux('');
      setObservationsNotEdited(true);
    }
    return;
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
        path={`plano-aula/${drillUpdated.classPlanId}`}
        hasReturnArrow={true}
      />
      <div className="pageDrill">
        {titleNotEdited ? (
          <div className="titleLayout" style={{ justifyContent: 'center' }}>
            <h1 style={{ paddingRight: '10px', overflow: 'hidden' }}>
              {title}
            </h1>
            <Icon
              icon="ph:pencil"
              color="white"
              width="25px"
              onClick={startEditingTitle}
              className="clickableIcon"
            />
          </div>
        ) : (
          <div className="titleLayout" style={{ justifyContent: 'center' }}>
            
            <input
              className="inputsDrill w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              id="inputTitle"
              style={{ marginRight: '10px' }}
              onChange={(e) => setTitleAux(e.target.value)}
              maxLength={50}
              value={titleAux}
            />
            <Icon
              icon="iconamoon:check-fill"
              color="white"
              width="25px"
              onClick={finishEditingTitle}
              className="clickableIcon"
            />
          </div>
        )}
        <div className='contentDrill'>
          <div className="textDrill" id="descObsContainer">
            <div className="titleLayout">
              <h1 style={{paddingRight: '10px'}}>Descrição</h1>
              {descriptionNotEdited ? (
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
            {descriptionNotEdited ? (
              <p className="pDrill" style={{ margin: '10px 0 20px 0' }}>
                {description}
              </p>
            ) : (
              <textarea
                className="textAreaDrill w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setDescriptionAux(e.target.value)}
                maxLength={500}
                value={descriptionAux}
              />
            )}
            <div className="titleLayout">
              <h1 style={{ paddingRight: '10px' }}>Observações</h1>
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
              <p className="pDrill">{observations}</p>
            ) : (
              <textarea
                className="textAreaDrill w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setObservationsAux(e.target.value)}
                maxLength={500}
                value={observationsAux}
              />
            )}
          </div>
          <div className='textDrill'>
            <button style={{backgroundColor: "#1B74E4", boxSizing: "content-box", padding: "5px 10px", borderRadius: "10px", border: "1px solid white"}} onClick={saveDrillState}>Salvar</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{visibility: "hidden", cursor: "pointer"}} id='apagar'>
              <path fill="white" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>
            </svg>
            <div id="drillGraphicContainer">
              {newItems.map(([id, typeImage, width]) => {
                return <DrillElement id={id} key={id} deleteItem={deleteNewItem} image={listImages[typeImage]} elementWidth={width} top={0} left={0}/>
              })}
              {savedItems.length > 0 && savedItems.map((a) => {
                return <DrillElement id={a.id} key={a.id} deleteItem={deleteSavedItem} image={listImages[a.index]} elementWidth={listButtons[a.index][1]} top={a.top} left={a.left}/>
              })}
            </div>
            <div className='drillButtonsPanel'>
              {listButtons.map(([index, width, source, elementWidth]) => {
                return <button className='buttonAddElementDrill' onClick={() => {addDrillElement(index, width)}}>
                  <img src={source} style={{width: `${elementWidth}px`, boxSizing: "content-box"}}></img>
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drill;
