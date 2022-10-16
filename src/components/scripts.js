/* IMPORTS */
import axios from "axios";
import { useParams } from "react-router-dom";

/* Token teste de API-FUTEBOL */
const token = "test_9d7ac31c1885497d8ec1f76522b841";

/* Função para conectar-se a API */
export async function FncGETAPICampeonato() {
  const {id} = useParams();
  console.log('testeID', id);

  const responseAPICamp = await axios({
    method: "GET",
    url: "https://api.api-futebol.com.br/v1/campeonatos/2",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((e)=>{
    console.log('deu certo axios', e);
  }).catch((e)=>{
console.error("deu errado axios", e);
  });
  console.log('response: ',responseAPICamp);
  return responseAPICamp;
}


























/* Função para conectar-se a API */
export const fncGETAPIArtilharia = async()=> {
  await axios({
    method: "GET",
    url: "https://api.api-futebol.com.br/v1/campeonatos/14/artilharia",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((e) => {
    console.log("responseRequestAPI", e);
  })
}