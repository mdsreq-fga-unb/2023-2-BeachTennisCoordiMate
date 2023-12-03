import '../index.css';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import ClassPlanService from '../service/classPlanService';
import { useParams } from 'react-router-dom';

const ViewPlan = () => {
    const { id } = useParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const userString = localStorage.getItem('user');
    let userId;
    if (userString !== null) {
        const user = JSON.parse(userString);
        userId = user.id;
    } else {
        userId = '';
    }
    useEffect(() => {
        loadData();
    }, [id]);
    
    const [title] = useState('');
    const classPlan = new ClassPlanService();
    const [plan, setPlan] = useState ({
        id: '',
        title: title,
        goals: '',
        observations: '',
        userId: id 
    });
    
    async function loadData() {
        const response = await classPlan.get(`/visualizar/${id}`);
        setPlan(response.data);
    };
    

    return (
        <>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="plan" key={plan.id}>
                <h1 style={{fontSize: "30px", color: "black", padding: "10px 0", textAlign: "center"}}>{plan.title}</h1>
            </div>
            <h2 style={{marginTop: "1em", marginLeft: "3em", fontSize: "3em"}}>Objetivos</h2>
            <div className='card space-y-4' style={{backgroundColor: "gray", padding: "5em", marginLeft: "5em", marginRight: "5em", borderRadius: "1em", marginTop: "5em"}}>
                <p style={{color: "white", fontSize: "2em"}}>{plan.goals}</p>
            </div>
            <h2 style={{marginTop: "1em", marginLeft: "3em", fontSize: "3em"}}>Observações</h2>
            <div className='card space-y-4' style={{backgroundColor: "gray", padding: "5em", marginLeft: "5em", marginRight: "5em", borderRadius: "1em", marginTop: "5em"}}>
                <p style={{color: "white", fontSize: "2em"}}>{plan.observations}</p>
            </div>
        </>
    )
};

export default ViewPlan;
