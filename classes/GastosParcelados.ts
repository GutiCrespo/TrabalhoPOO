// gastosParcelados.ts
import Gastos from "./Gastos";

class GastosParcelados extends Gastos {
  private numeroParcelas: number;

  constructor(nome: string, valor: number, mes: number, numeroParcelas: number) {
    super(nome, valor, mes);
    this.numeroParcelas = numeroParcelas;
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Parcelado - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(
        2
      )}, Parcelas: ${this.numeroParcelas}`
    );
  }
}

export default GastosParcelados;
