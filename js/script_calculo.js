import { veiculos } from "./script_veiculo.js";

let diferenca = ''
const dataHoje = new Date()

const calculoIsencao = (objVeiculo) => {
    const dataFabricacao = new Date(objVeiculo.fabricacao)
    const diferenca = dataHoje - dataFabricacao 

    return diferenca
}

// export diferenca

/*const ipva = (objVeiculo) => {
    
}
*/
let valorIpva = ''
const calculoIpva = (objVeiculo) => {
    if((objVeiculo.combustivel) == "Gasolina") {
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.20)}`
    }else if ((objVeiculo.combustivel) ==  "Etanol"){
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.15)}`

    }else if ((objVeiculo.combustivel) == "Biocombustível"){
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.10)}`

    }else if ((objVeiculo.combustivel) == "Híbrido"){
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.08)}`

    }else //((objVeiculo.combustivel) == "Elétrico")
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.02)}`
    
      return valorIpva
    }
    console.log (valorIpva)
  



export {calculoIpva}

/* Taxas:
	Gasolina: Valor veiculo * 0.20
	Etanol: 0.15
	Biocombustível: 0.10
	Hibridos: 0.8
	Eletrico: 0.2
*/
// export {calculoIsencao}