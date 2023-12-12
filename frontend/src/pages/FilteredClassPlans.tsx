import { useState } from 'react';
import '../index.css';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import ClassPlanService from '../service/classPlanService';
import Header from '../components/Header';
import DrillService from '../service/drillService';

const FilteredClassPlans = () => {
  const userClassPlans = localStorage.getItem('userClassPlans');
  const [classPlans, setClassPlans] = useState(
    JSON.parse(userClassPlans ? userClassPlans : ''),
  );
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
  const classPlan = new ClassPlanService();
  const drill = new DrillService();

  const openDeletePanel = () => {
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

  const redirectToClassPlans = async () => {
    try {
      let userClassPlans = await classPlan.getManyById(id as string);
      localStorage.setItem(
        'userClassPlans',
        JSON.stringify(userClassPlans.data),
      );
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: '#272727', color: 'white' }}
        closeButton={<Icon icon="tabler:x" color="white" width="15px" />}
      />
      <Header
        changeScreenFunction={redirectToClassPlans}
        hasReturnArrow={true}
      ></Header>
      <div className="buttonsPagesClassPlans">
        <div className="containerVisibleComp">
          {classPlans.length > 0 ? (
            <div className="buttonsPanel">
              {classPlans.map((a) => {
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
          ) : (
            <p style={{ color: 'white' }}>
              Nenhum plano de aula com esses atributos foi encontrado!
            </p>
          )}
        </div>
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

export default FilteredClassPlans;
