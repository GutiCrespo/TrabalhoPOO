// gastosVariaveis.ts
import GastosFixos from "./GastosFixos";

class GastosVariaveis extends GastosFixos {
  private descricao: string;

  constructor(nome: string, valor: number, descricao: string) {
    super(nome, valor);
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
