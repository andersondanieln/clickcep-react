import axios from 'axios';





async function BuscarCEP(cep) {
    let api = `https://viacep.com.br/ws/${cep}/json`;
    let resp = await axios({
        method: 'get',
        url: api,
        responseType: 'json'
    });

    return resp.data;
}


export default BuscarCEP;