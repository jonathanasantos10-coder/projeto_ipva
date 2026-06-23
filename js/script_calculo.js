import { veiculos } from "js/script_veiculo.js";

let diferenca = ''
const dataHoje = new Date()

const calculoIsencao = (objVeiculo) => {
    const dataFabricacao = new Date(objVeiculo.fabricacao)
    const diferenca = dataHoje - dataFabricacao 

    return diferenca
}
export {calculoIsencao}