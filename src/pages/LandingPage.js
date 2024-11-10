import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
    
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        <div className="container1">
        <div className="left-column">
        <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
        </div>
        <div className="right-column">
                <div className="button-container">
                <button className="moving-button button1">
                <div className="vertical-line1"></div> 
                <div className="vertical-line2"></div>
                <div className="vertical-line3"></div>
                <div className="vertical-line4"></div> 
            </button>
            <button 
            className="moving-button button2"
            onClick={() => handleNavigation('/Sining')}
            >
                <h3 className="button-title2">SINING NG PAKIKIPAGTALASTASAN</h3>
                <div className="vertical-line5"></div> 
                <div className="vertical-line6"></div>
                <div className="vertical-line7"></div>
                <div className="vertical-line8"></div>  
            </button>
            <button 
            className="moving-button button3"
            onClick={() => handleNavigation('/Pagbasa')}
            >
                <h3 className="button-title3">PAGBASA AT PAGSULAT SA IBA’T IBANG DISCIPLINA</h3>
                <div className="vertical-line9"></div> 
                <div className="vertical-line10"></div>
                <div className="vertical-line11"></div>
                <div className="vertical-line12"></div>  
            </button>
            <button className="moving-button button4">
                <div className="vertical-line13"></div> 
                <div className="vertical-line14"></div> 
                <div className="vertical-line15"></div>
                <div className="vertical-line16"></div> 
            </button>
        </div>
    </div>
    </div>
  );
};

export default LandingPage;
