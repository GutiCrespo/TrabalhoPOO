// index.ts
import GastosFixos from "./GastosFixos";
import GastosParcelados from "./GastosParcelados";
import GastosRegulares from "./GastosRegulares";
import GastosVariaveis from "./GastosVariaveis";

// Exemplo de utilização
const gastoFixo = new GastosFixos("Aluguel", 1500);
const gastoParcelado = new GastosParcelados("Compras Online", 500, 3);
const gastoRegular = new GastosRegulares("Internet", 100, "Mensal");
const gastoVariavel = new GastosVariaveis(
  "Restaurante",
  50,
  "Almoço com amigos"
);

gastoFixo.exibirGasto();
gastoParcelado.exibirGasto();
gastoRegular.exibirGasto();
gastoVariavel.exibirGasto();
