// Gastos.ts
// Define o padrão a ser adotado para todos os GastosFixos.

class Gastos {
  protected _nome: string;
  protected _valor: number;
  protected _mes: number;

  constructor(nome: string, valor: number, mes: number) {
    this._nome = nome;
    this._valor = valor;
    this._mes = mes;
  }

  public registrarGasto(): void {
        console.log("Teste");
        
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Fixo - Nome: ${this._nome}, Valor: R$${this._valor.toFixed(2)}`
    );
  }
}

export default Gastos;
