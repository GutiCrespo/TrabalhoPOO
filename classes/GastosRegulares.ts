// gastosRegulares.ts
import GastosFixos from "./GastosFixos";

class GastosRegulares extends GastosFixos {
  private periodicidade: string;

  constructor(nome: string, valor: number, periodicidade: string) {
    super(nome, valor);
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
