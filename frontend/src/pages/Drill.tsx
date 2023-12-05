import { useEffect, useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import DrillService from '../service/drillService';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Drill = () => {
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

  const [drillUpdated, setDrillUpdated] = useState({
    id: '',
    title: '',
    description: '',
    observations: '',
    classPlanId: '',
  });

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
      <div className="drillPage">
        {titleNotEdited ? (
          <div className="titleLayout" style={{ justifyContent: 'center' }}>
            {' '}
            <h1 style={{ paddingRight: '10px', overflow: 'hidden' }}>
              {title}
            </h1>{' '}
            <Icon
              icon="ph:pencil"
              color="white"
              width="25px"
              onClick={startEditingTitle}
              className="clickableIcon"
            />{' '}
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
            <h1 style={{ paddingRight: '10px' }}>Descrição</h1>
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
      </div>
    </>
  );
};

export default Drill;
