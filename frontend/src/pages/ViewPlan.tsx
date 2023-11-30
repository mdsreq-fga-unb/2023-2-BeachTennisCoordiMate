import '../index.css';
import Header from '../components/Header';
import { useState } from 'react';

const ViewPlan = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <center>
                <h1 style={{fontSize: "3em", marginTop: "1em"}}>Aula de gancho seg-ter</h1>           
            </center>

            <h2 style={{marginTop: "1em", marginLeft: "3em", fontSize: "3em"}}>Objetivos</h2>
            <div className='card space-y-4' style={{backgroundColor: "gray", padding: "5em", marginLeft: "5em", marginRight: "5em", borderRadius: "1em", marginTop: "5em"}}>
                <p style={{color: "white", fontSize: "2em"}}>Os critérios de aceitação foram desenvolvidos e verificados?</p>
                <p style={{color: "white", fontSize: "2em"}}>O código desenvolvido está de acordo com a arquitetura do projeto?</p>
                <p style={{color: "white", fontSize: "2em"}}>O código desenvolvido é responsivo com os modelos de tela estabelecidos para o projeto?</p>
                <p style={{color: "white", fontSize: "2em"}}>A funcionalidade desenvolvida foi revisada por um membro da equipe?/</p>
                <p style={{color: "white", fontSize: "2em"}}>A funcionalidade está integrada ao sistema principal da aplicação?</p>
            </div>

            <h2 style={{marginTop: "1em", marginLeft: "3em", fontSize: "3em"}}>Observações</h2>
            <div className='card space-y-4' style={{backgroundColor: "gray", padding: "5em", marginLeft: "5em", marginRight: "5em", borderRadius: "1em", marginTop: "5em"}}>
                <p style={{color: "white", fontSize: "2em"}}>...</p>
                <p style={{color: "white", fontSize: "2em"}}>...</p>
                <p style={{color: "white", fontSize: "2em"}}>...</p>
            </div>
        </>
    )
};

export default ViewPlan;
