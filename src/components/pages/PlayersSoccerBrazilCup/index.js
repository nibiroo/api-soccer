import axios from "axios";
import { React, useEffect, useState } from "react";

const estilos = {
    inputBackgroundColor: {
        backgroundColor: "#A9A9A9",
        textAlign: "center",
    },
    squareLogo: {
      width: "200px",
      height: "200px",
    }
}

function PlayersSoccerBrazilCup() {
    const [ footballers, setFootBallers ] = useState();

    useEffect(()=>{
        (async()=>{
            await axios({
                method: 'GET',
                url: 'https://api.api-futebol.com.br/v1/campeonatos/2/artilharia',
                headers: {
                    Authorization: 'Bearer test_9d7ac31c1885497d8ec1f76522b841'
                }
            }).then((e)=>{
                setFootBallers(e.data);
                console.log('G Response', e)
            })
        })()
    } ,[])

    return (
        <div>
            { footballers && footballers.map((e)=>{
                return <>
                    <center>
                        <label htmlFor="nomePopularJogador">Nome do jogador:</label><br/>
                        <input id="nomePopularJogador" type="text" value={e?.atleta?.nome_popular} style={{...estilos.inputBackgroundColor}} readOnly />
                        <br/><br/>
                        {/*  */}
                        <label htmlFor="qtdeGolsJogador">Quantidade de gols:</label><br/>
                        <input id="qtdeGolsJogador" type="text" value={e?.gols} style={{...estilos.inputBackgroundColor}} readOnly />
                        <br/><br/>
                        {/*  */}
                        <label htmlFor="atualTimeJogador">Atual time:</label><br/>
                        <input id="atualTimeJogador" type="text" value={e?.time?.nome_popular} style={{...estilos.inputBackgroundColor}} readOnly />
                        <br/><br/>
                        {/*  */}
                        <label htmlFor="logoatualTimeJogador">Logo do atual time:</label><br/>
                        <img id="logoatualTimeJogador" src={e?.time?.escudo} style={{...estilos.squareLogo}} />
                        <br/><br/>
                        <hr/>
                        <hr/>
                    </center>
                </>
            }) }
        </div>
    );
}

export default PlayersSoccerBrazilCup;