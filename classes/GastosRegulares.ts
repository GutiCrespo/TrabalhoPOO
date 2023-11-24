// gastosRegulares.ts
import Gastos from "./Gastos";

class GastosRegulares extends Gastos {
  private periodicidade: string;

  constructor(nome: string, valor: number, mes: number, periodicidade: string) {
    super(nome, valor, mes);
    this.periodicidade = periodicidade;
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Regular - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(
        2
      )}, Periodicidade: ${this.periodicidade}`
    );
  }
}

export default GastosRegulares;
