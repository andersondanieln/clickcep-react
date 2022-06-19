 import './App.css';
 import {useState} from 'react';
 import Consultar from './Consultar.js';
 import Resultado from './Resultado.js';
 import BuscarCEP from './BuscarCEP.js';
 import Swal from 'sweetalert2';



function App() {
     
    function err(title, msg){
      Swal.fire({
        icon:'error',
        title:title,
        html:msg
      })
    }
    const errMsg = {
      empty: ()=>err('Campo vazio', 'Você precisa digitar um CEP válido.'),
      invalid:()=>err('CEP Inválido', 'O CEP digitado é inválido.')
    }

    const [dados, setDados] = useState('');
    const [hasResult, setHasResult] = useState(false);

    async function handlerSearch(cep){
      if(cep === ''){
        errMsg.empty();
        return;
      }else if(cep.length < 8 || cep.length > 8){
       errMsg.invalid();
       return;
      }

     try{
        let dados = await BuscarCEP(cep);
  console.log(dados);
        if(dados.erro){
          alert('CEP inválido!');
          return;
        }
        setHasResult(true);
        setDados(dados);
     }catch(e){
        Swal.fire({
          icon:'error',
          title:'CEP Inválido!',
          html:'O CEP digitado é inválido'
        })
     }
    }
 
    let displaying = !hasResult ? <Consultar  handlerSearch={handlerSearch}/> : <Resultado dados = {dados} setHasResult = {setHasResult}/>
    return (  
      <div className="container">
        <div className="header">
        <h1 className="title">Click <span>CEP</span></h1>
        <h2 className="subTitle">O jeito fácil de consultar CEPs.</h2>
        </div>
       {displaying}
        <footer>
          <p>
            Made with ❤️ by <a href="#">Anderson Daniel</a> using <a href="#react">React</a> and <br/><a href="#">API Consulta CEP</a>
          </p>
        </footer>
      </div>
    );
}

export default App;