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

addVeiculo(veiculo)

// limpando o form
formVeiculo.reset()
})

// dando push dos dados no array
const addVeiculo = (objVeiculo) => {
    veiculos.push(objVeiculo)

    listaVeiculos()
}

const listaVeiculos = () => {
divResult.innerHTML= ''
veiculos.forEach((elem, i) => {
    divResult.innerHTML += `<div class='veiculo-novo'> ${i + 1} - ${elem.marca}, ${elem.modelo}, ${elem.placa}, ${elem.fabricacao},${elem.valor} ${elem.combustivel}`
})
}
