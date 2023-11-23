// gastosFixos.ts
class GastosFixos {
  protected nome: string;
  protected valor: number;

  constructor(nome: string, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Fixo - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(2)}`
    );
  }
}

export default GastosFixos;
