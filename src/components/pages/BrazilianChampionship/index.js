import { useEffect, useState } from "react";
import axios from "axios";

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
    textAlign: "center",
  },
  width: {
    width: "220px",
  },
  squareLogo: {
    width: "200px",
    height: "200px",
    marginLeft: "25px",
  }
}

function BrzlinChampionship() {
    const [ campeonatoBrasileiro, setcampeonatoBrasileiro ] = useState();

    useEffect(()=>{
        /* ()() -> Criando função anônima e no 2° (), é que estou chamando ela */
        (async()=>{
            await axios({
                method: "GET",
                url: "https://api.api-futebol.com.br/v1/campeonatos/",
                headers: {
                    Authorization: `Bearer test_9d7ac31c1885497d8ec1f76522b841`
                }
            }).then((e)=>{
                setcampeonatoBrasileiro(e.data);
                console.log('G Response', e.data);
            })
        })()
    }, []);

    return (
        <div style={{paddingTop:"100px"}}>
            {campeonatoBrasileiro && campeonatoBrasileiro.map((e)=>{
                return <>
                    <center>
                        <label htmlfor="nomeCampeonato">Nome do Campeonato:</label>
                        <br/>
                        <input id="nomeCampeonato" type="text" value={e?.nome} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        {/*  */}
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="nomePopularCampeonato">Nome Popular:</label>
                        <br/>
                        <input id="nomePopularCampeonato" type="text" value={e?.nome_popular} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        {/*  */}
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="temporadaEdicaoAtualCampeonato">Temporada da edição atual:</label>
                        <br/>
                        <input id="temporadaEdicaoAtualCampeonato" type="text" value={e?.edicao_atual?.temporada} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="nomePopularCampeonato">Tipo de pontuação:</label>
                        <br/>
                        <input id="nomePopularCampeonato" type="text" value={e?.fase_atual?.tipo} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        {/*  */}
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="statusCampeonato">Status:</label>
                        <br/>
                        <input id="statusCampeonato" type="text" value={e?.status} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        {/*  */}
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="rodadaAtualCampeonato">Rodada Atual:</label>
                        <br/>
                        <input id="rodadaAtualCampeonato" type="text" value={e?.rodada_atual?.nome} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>
                        {/*  */}
                        <br/>
                        <br/>
                        {/*  */}
                        <label htmlfor="logoCampeonato">Logo:</label>
                        <br/>
                        <img id="logoCampeonato" type="text" src={e?.logo} style={{...estilos.squareLogo}}/>
                        {/*  */}
                    </center>
                </>
            })}
        </div>
    );
}

export default BrzlinChampionship;