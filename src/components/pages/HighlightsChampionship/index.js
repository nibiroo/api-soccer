import { React, useEffect, useState } from "react";
import axios from "axios";

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
  },
  width: {
    width: "220px",
  },
  squareLogo: {
    width: "200px",
    height: "200px",
  }
}

function HightlightsChampionship() {
    /* Variável para armazenar response da API */
    const [campeonato, setCampeonato] = useState([]);

    useEffect(()=>{
      (async()=>{
        await axios({
          method: 'GET',
          url: 'https://free-football-soccer-videos.p.rapidapi.com/',
          headers: {
            'X-RapidAPI-Key': 'e6408905ddmshfb67b7c4cb9c024p166f0djsnb73f1d938275',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
          }
          }).then((e)=>{
            setCampeonato(e.data);
            console.log('G Response', e.data);
          }).catch((e)=>{
            console.error("G Response", e);
          });
      })()
    }, [])

    return (
      <div>
        {campeonato && campeonato.map((e)=>{
          return (
            <div>
              <center>
              <div style={{maxWidth:"600px", color:"white", fontSize:'40px'}} dangerouslySetInnerHTML={ { __html: e?.competition?.name } }></div>
              <div style={{maxWidth:"600px", color:"white", fontSize:'40px'}} dangerouslySetInnerHTML={ { __html: e.title } }></div>
              <div style={{maxWidth:"600px"}} dangerouslySetInnerHTML={ { __html: e.embed } }></div>
              </center>
              <hr/><hr/>
            </div>
            )
        })}
      </div>
    );
}

export default HightlightsChampionship;