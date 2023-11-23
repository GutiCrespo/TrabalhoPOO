// gastosParcelados.ts
import GastosFixos from "./GastosFixos";

class GastosParcelados extends GastosFixos {
  private numeroParcelas: number;

  constructor(nome: string, valor: number, numeroParcelas: number) {
    super(nome, valor);
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
