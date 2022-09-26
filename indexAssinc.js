import fs from 'fs';
import chalk from "chalk";

function retornaErro(erro){
  console.log(erro);
  throw new Error(chalk.red(erro.code, `nenhum arquivo .md encontrado`));
}
//(5) lançando e instanciando um novo erro

function pegaArquivo(caminhoArquivo){
  const enconding = 'utf-8';
  fs.promises.readFile(caminhoArquivo, enconding)
    .then()
}

//(13).then() serve para encadear código assíncrono