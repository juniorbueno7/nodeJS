//02carregamento de arquivos
//05promessas
import fs from 'fs';
import chalk from "chalk";

function retornaErro(erro){
  console.log(erro);
  throw new Error(chalk.red(erro.code, `nenhum arquivo .md encontrado`));
}
//(5) lançando e instanciando um novo erro

//reescrevendo a função pegaArquivo de forma assincrona
function pegaArquivo(caminhoArquivo){
  const enconding = 'utf-8';
  fs.promises
    .readFile(caminhoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => retornaErro(erro))
    //.catch(retornaErro) ou assim, callback afinal de contas....
}
//(16).then(callback) 'entao' serve para encadear código assíncrono.
//(17).catch(erro) 'pegar' o erro caso veio a acontecer.

//(15 a 18)
//diferente da normalidade, o código não está um dentro do outro, mas sim encadeados
//.readFile(método nátivo do nodejs) vai atrás do arquivo. não é um retorno de dados, é uma promessa de retorno de dados
//.then() automaticamente recebe, caso tenha, o produto retornado por .readFile, então so precisamos declarar nessa arrow function o que queremos que o método faça com o que chega pra ele. 
//.catch() caso não chegue nada ao .then, entao chega para o catch, que serve pra tratar o erro.