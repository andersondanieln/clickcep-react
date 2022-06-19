
 import BuscarCEP from './BuscarCEP.js';
import {IoMdArrowBack} from 'react-icons/io';
import Botao from './Botao.js';
import {FaMapMarkerAlt} from 'react-icons/fa';
  function Resultado(props) {
   
   function back(){
    props.setHasResult(false)
   }

return (
    
     <div className="innerContainer resultado" id="resultado">
         <button className="voltar">
            <IoMdArrowBack size={25} color="#1203f4" onClick={back} />
         </button>
         <h3>Resultado para:</h3>
          <h1 className="cep">{props.dados.cep}</h1>
           <div className="card">
           
           <div className="card-content">
           <span>Rua: </span>
             <p>{props.dados.logradouro}</p>
             <span>Bairro:</span>
             <p>{props.dados.bairro}</p>
             <span>Cidade | UF:</span>
             <p>{props.dados.localidade} | {props.dados.uf}</p>
           <div className="Maps">
           <Botao texto="Ver no Maps" icon={<FaMapMarkerAlt color="white" size="25"/>}/>
           </div>
                       </div>

           </div>
         </div>
)
 
}

export default Resultado;