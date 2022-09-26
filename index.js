import fs from 'fs';
import chalk from "chalk";

function retornaErro(erro){
  console.log(erro);
  throw new Error(chalk.red(erro.code, `nenhum arquivo .md encontrado`));
}
//(5) lançando e instanciando um novo erro

//função para a utilização da lib fs
//fs.readFile(argumentos necessários para o funcionamento, disponivel na documentação da lib)
function pegaArquivo(caminhoArquivo){
  const enconding = 'utf-8';
  fs.readFile(caminhoArquivo, enconding, (erro, texto) => {
    if(erro){
      retornaErro(erro)
    } 
    console.log(chalk.green(texto))
  })
}
//(8/43) _ como argumento para nao deixar em branco, no momento nao precisamos preencher essa vaga.
pegaArquivo('./arquivos/');
