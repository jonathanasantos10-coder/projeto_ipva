import { veiculos } from "./script_veiculo.js";

let valorIpva = ''
const calculoIpva = (objVeiculo) => {

  if ((objVeiculo.fabricacao) <= 2004) {
    valorIpva = `isento pois seu veículo tem mais de 20 anos.`

  } else if ((objVeiculo.combustivel) == "Gasolina") {
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.20)}`

  } else if ((objVeiculo.combustivel) == "Etanol") {
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.15)}`

  } else if ((objVeiculo.combustivel) == "Biocombustível") {
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.10)}`

  } else if ((objVeiculo.combustivel) == "Híbrido") {
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.08)}`

  } else //((objVeiculo.combustivel) == "Elétrico")
    valorIpva = `R$ ${parseFloat(objVeiculo.valor * 0.02)}`

  return valorIpva

}
console.log(valorIpva)



let seguro = ''
const calculoSeguro = (objVeiculo) => {

  seguro = `R$ ${parseFloat(objVeiculo.valor * 0.10)}`

  return seguro
}

export { calculoSeguro }
export { calculoIpva }

