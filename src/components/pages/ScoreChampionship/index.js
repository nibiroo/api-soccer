import { React, useEffect, useState } from "react";
import axios from "axios";

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
    textAlign: "center"
  },
  squareLogo: {
    width: "200px",
    height: "200px",
  }
}

function ScreChampionship() {

    const [ tabelaCampeonato, setTabelaCampeonato ] = useState();

    useEffect(()=>{
        (async()=>{
            await axios({
                method: "GET",
                url: "https://api.api-futebol.com.br/v1/campeonatos/14/tabela",
                headers: {
                    Authorization: "Bearer test_9d7ac31c1885497d8ec1f76522b841",
                }
            }).then((e)=>{
                setTabelaCampeonato(e.data);
                console.log('G Response', e.data);
            })
        })()
    }, [])

    return (
      <div>
        { tabelaCampeonato && tabelaCampeonato.map((e)=>{
            return <>
                <center>
                    <label>Posição no placar:</label><br/>
                    <input type="text" value={e?.posicao} style={{...estilos.inputBackgroundColor}} readOnly/>
                    <br/><br/>
                    {/*  */}
                    <label>Pontuação:</label><br/>
                    <input type="text" value={e?.pontos} style={{...estilos.inputBackgroundColor}} readOnly/>
                    <br/><br/>
                    {/*  */}
                    <label>Time:</label><br/>
                    <input type="text" value={e?.time?.nome_popular} style={{...estilos.inputBackgroundColor}} readOnly/>
                    <br/><br/>
                    {/*  */}
                    <label>Escudo do time:</label><br/>
                    <img src={e?.time?.escudo} style={{...estilos.squareLogo}} readOnly/>
                    <br/><br/>
                    {/*  */}
                    <label>Quantidade de vitórias:</label><br/>
                    <input type="text" value={e?.vitorias} style={{backgroundColor: "green", textAlign: "center"}} readOnly/>
                    <br/><br/>
                    {/*  */}
                </center>
                <hr/>
                <hr/>
            </>
        }) }
      </div>
    );
}

export default ScreChampionship;