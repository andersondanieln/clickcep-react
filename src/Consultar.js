import { BiSearchAlt } from 'react-icons/bi';
import {useState} from 'react';
import BuscarCEP from './BuscarCEP.js';
import Resultado from './Resultado.js';
import Botao from './Botao.js';
 

function Consultar(props) {
    
  const [cep, setCep] = useState('');

  function search(){
    props.handlerSearch(cep);
  }
 
     return (
    <div className="innerContainer" id="consultar">
    <input type="number" value = { cep} onChange = {e=> setCep(e.target.value)}  className="cepInput" placeholder='Digite o CEP' maxLength={8} id="cepInput" onKeyDown={e=>{if(e.key == 'Enter' ) setTimeout(()=>search(), 1000)}}/>
    <Botao click={search} texto={'Consultar'} icon={<BiSearchAlt size={30} color="white" />}/> 
  </div>
  )
 
    
}

export default Consultar;