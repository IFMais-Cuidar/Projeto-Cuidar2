import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export function NavBar({dados}){
    
    document.title=dados.data.nomedaempresa[0].text
    
    return(
        <>               
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">                    
                                
                    <Link to={window.location.pathname === "/" ? "#" : "/"} onClick={()=>{
                        window.scrollTo(0,0)
                    }} className="navbar-brand">{dados.data.nomedaempresa[0].text}</Link> 
                   
                </div>  
                
                <div className="menu-navegacao" id="menu-navegacao">
                    <ul className="nav navbar-nav navbar-right">      
                        {window.location.pathname === "/" ? 
                        <>                                         
                        <li>
                            <a className="" href="#campanha">Campanhas</a>
                        </li>
                        <li>
                            <a className="" href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a className="" href="#quemsomos">Quem Somos</a>
                        </li>
                        <li>
                            <a className="" href="#localizacao">Localização</a>
                        </li>
                        <li>
                            <a className="" href="#contato">Contato</a>
                        </li>
                        </>
                        :
                        <>
                       {/* <li>
                            <a className="" href="#campanha">Campanha</a>
                        </li>
                        <li>
                            <a className="" href="#galeria">Galeria</a>
                        </li>
                        <li>
                            <a className="" href="#quemsomos">Quem Somos</a>
                        </li>
                        <li>
                            <a className="" href="#doacao">Doar</a>
                       </li>*/}
                        <li>
                            <Link to="/#">Voltar</Link>                            
                        </li>
                        </>
                        }
                    </ul>
                </div>
                
            </div>
        </nav>
        </>
    );
}