import { calculoIpva } from "./script_calculo.js"
import { calculoSeguro } from "./script_calculo.js"

const veiculos = [] // isto é um array zerado.

// pegando elemetnos do dom
const formVeiculo = document.querySelector('#form-veiculo')
const divResult = document.querySelector('#div-lista-veiculos')
const combustivel = document.querySelector('#combustivel')

formVeiculo.addEventListener('submit', (evt) => { // CAPTURANDO O ENVIo
    evt.preventDefault() //aqui prevenimo o refresh da pagina ao clicar submit

    const dadosForm = new FormData(formVeiculo) //data form para as funções a seguir 

    const combustivelVeiculo = combustivel.value // como eu usei select ao invés de radio ou type text, eu preciso fazer uma variável pra depois inserir no objeto (pelo menos eu acho que é assim né), e não prof, eu não usei ia nessa parte, só lá no date mesmo.

    const veiculo = { // o objeto literal e seus elemetntos
        marca: dadosForm.get('marca'),
        modelo: dadosForm.get('modelo'),
        placa: dadosForm.get('placa'),
        fabricacao: dadosForm.get('fabricacao'),
        valor: dadosForm.get('valor'),
        combustivel: combustivelVeiculo

    }

    addVeiculo(veiculo) //aqui eu chamo o push para cadastrar um veiculo no array

    // isso aqui só limpa o formulário quando o usuário da submit.
    formVeiculo.reset()
})

// dando push do veiculo no no array
const addVeiculo = (objVeiculo) => {
    veiculos.push(objVeiculo)

    listaVeiculos() // chamando a função de listar, se isso não estiver aqui o código não sabe o que listar.
}

const listaVeiculos = () => { //isso aqui é  função de listar todos o veiculos cadastrados, ela exibe no no divresult.
    divResult.innerHTML = ''  // faz com que o divresult NÃO exiba o reultado anterior junto do resultado novo, "limpando" o resultado para exibir a nova lista.
    veiculos.forEach((elem, i) => { //percorre cada elemento em veículos e faz com que ele seja exibido conforme definido no divresult ali em baixo.
        divResult.innerHTML += `<div class='veiculo-novo'> ${i + 1} Dados do veículo <BR> Marca do veículo: ${elem.marca} <br> Modelo do veículo: ${elem.modelo} <br> Placa do veículo: ${elem.placa} <br> Ano do veículo: ${elem.fabricacao} <br> Valor do veículo: ${elem.valor} <br> Tipo de combustível: ${elem.combustivel} <br> IPVA é: ${calculoIpva(elem)} <br> Valor de seguro do é: ${calculoSeguro(elem)}`
        
       
    }) 
}

export { veiculos }
