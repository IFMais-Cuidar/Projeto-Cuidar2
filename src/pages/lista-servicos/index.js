import React, { useEffect, useState } from 'react';
import Prismic from '@prismicio/client';

import { NavBar } from "../../components/NavBar";

//import { Header } from "../../components/Header";
import { Servicos } from "../../components/Servicos";
//import { Campanhas } from "../../components/Campanhas";
//import { QuemSomos } from "../../components/QuemSomos";
//import { Localizacao } from "../../components/Localizacao";
//import { Contato } from "../../components/Contato";

import { Footer } from "../../components/Footer";

function ListaDeServicos() {

  const [doc, setDocData] = useState(null);
  const apiEndpoint = process.env.REACT_APP_API_PRISMIC;
  const Client = Prismic.client(apiEndpoint);

  useEffect(()=>{
    window.scrollTo(0,0);

    const fetchData = async() => {
      const response = await Client.query(
          Prismic.Predicates.at('document.type', 'empresa')
      )
      if (response){
          setDocData(response.results[0]);
      }
    }
    fetchData();

  },[]);

  return (
    <>
      {doc ?
      <>
        <NavBar dados={doc}/> 
        <Servicos dados={doc} todas={true} showButton={false} />
        <Footer dados={doc} />
      </>
      : <div>Carregando...</div>
      }
      
    </>
  );
}

export default ListaDeServicos;