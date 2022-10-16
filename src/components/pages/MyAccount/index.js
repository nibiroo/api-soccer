import { React, useEffect, useState } from 'react';
import axios from 'axios';

const estilos = {
    inputBackgroundColor: {
      backgroundColor: "#A9A9A9",
      width: "250px",
      textAlign: "center"
    }
}

function MyAccount(){
    const [ dadosMinhaConta ,setDadosMinhaConta ] = useState();

    useEffect(()=>{
        (async()=>{
            await axios({
                method: "GET",
                url: "https://api.api-futebol.com.br/v1/me",
                headers: {
                    Authorization: "Bearer live_f35306ab42de57414f313502249e74"
                }
            }).then((e)=>{
                setDadosMinhaConta(e.data);
                console.log('G Response', e.data);
            })
        })()
    }, [])

    return(
        <center>
            <div style={{paddingTop:"100px"}}>
                <label htmlFor='nomeAccount'>Nome:</label><br/>
                <input id='nomeAccount' type="text" value={dadosMinhaConta.nome} style={{...estilos.inputBackgroundColor}}></input>
                <br/><br/>
                {/*  */}
                <label htmlFor='nomeAccount'>Sobrenome:</label><br/>
                <input id='sobrenomeAccount' type="text" value={dadosMinhaConta.sobrenome} style={{...estilos.inputBackgroundColor}}></input>
                <br/><br/>
                {/*  */}
                <label htmlFor='emailAccount'>Email:</label><br/>
                <input id='emailAccount' type="text" value={dadosMinhaConta.email} style={{...estilos.inputBackgroundColor}}></input>
                <br/><br/>
                {/*  */}
                <label htmlFor='organizacaoAccount'>Organizacao:</label><br/>
                <input id='organizacaoAccount' type="text" value={dadosMinhaConta.organizacao} style={{...estilos.inputBackgroundColor}}></input>
                <br/><br/>
                {/*  */}
                <label htmlFor='planoAccount'>Plano:</label><br/>
                <input id='planoAccount' type="text" value={dadosMinhaConta?.plano?.tipo} style={{...estilos.inputBackgroundColor}}></input>
                <br/><br/>
                {/*  */}
            </div>
        </center>
    );
}

export default MyAccount;