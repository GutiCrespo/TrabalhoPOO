// Gastos.ts
// Define o padrão a ser adotado para todos os GastosFixos.

class Gastos {
  protected nome: string;
  protected valor: number;
  protected mes: number;

  constructor(nome: string, valor: number, mes: number) {
    this.nome = nome;
    this.valor = valor;
    this.mes = mes;
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Fixo - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(2)}`
    );
  }
}

export default Gastos;
