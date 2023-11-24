// index.ts
import GastosFixos from "./GastosFixos";
import GastosParcelados from "./GastosParcelados";
import GastosRegulares from "./GastosRegulares";
import GastosVariaveis from "./GastosVariaveis";

// Exemplo de utilização
const gastoFixo = new GastosFixos("Aluguel", 1500, 7);
const gastoParcelado = new GastosParcelados("Compras Online", 500, 7, 3);
const gastoRegular = new GastosRegulares("Internet", 100, 7, "Mensal");
const gastoVariavel = new GastosVariaveis("Restaurante", 50, 7, "Almoço com amigos");

gastoFixo.exibirGasto();
gastoParcelado.exibirGasto();
gastoRegular.exibirGasto();
gastoVariavel.exibirGasto();