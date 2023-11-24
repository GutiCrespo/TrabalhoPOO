// gastosVariaveis.ts
import Gastos from "./Gastos";

class GastosVariaveis extends Gastos {
  private descricao: string;

  constructor(nome: string, valor: number, mes: number, descricao: string) {
    super(nome, valor, mes);
    this.descricao = descricao;
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Variável - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(
        2
      )}, Descrição: ${this.descricao}`
    );
  }
}

export default GastosVariaveis;
