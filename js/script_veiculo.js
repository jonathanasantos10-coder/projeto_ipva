const veiculos = [] // isto é um array zerado.

// pegando elemetnos do dom
const formVeiculo = document.querySelector('#form-veiculo')
const divResult = document.querySelector('#div-lista-veiculos')
const combustivel = document.querySelector('#combustivel')
formVeiculo.addEventListener('submit', (evt) => { // CAPTURANDO O ENVI
evt.preventDefault() //aqui prevenimo o refresh da pagina ao clicar submit

const dadosForm = new FormData(formVeiculo) //data form para as funções a seguir 

const combustivelVeiculo = combustivel.value

const veiculo = { // gerando os elementos que serão inseridos no array
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

// dando push dos dados no array
const addVeiculo = (objVeiculo) => {
    veiculos.push(objVeiculo) 

    listaVeiculos() // chamando a função de listar, se isso não estiver aqui o código não sabe o que listar.
}

const listaVeiculos = () => { //isso aqui é  função de listar todos o veiculos cadastrados, ela exibe no no divresult.
divResult.innerHTML= ''  // faz com que o divresult NÃO exiba o reultado anterior junto do resultado novo, "limpando" o resultado para exibir a nova lista.
veiculos.forEach((elem, i) => { //percorre cada elemento em veículos e faz com que ele seja exibido conforme definido no divresult ali em baixo.
    divResult.innerHTML += `<div class='veiculo-novo'> ${i + 1} - ${elem.marca}, ${elem.modelo}, ${elem.placa}, ${elem.fabricacao},${elem.valor} ${elem.combustivel}`
}) // o + faz com que "outro divresult" seja exibido, evitando que o anterior seja apagado. 
}

export { veiculos }
import { calculoIsencao } from "js/script_calculo.js"