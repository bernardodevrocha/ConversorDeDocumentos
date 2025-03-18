var Reader = require('./Reader.js');
var Processor = require('./Processor.js');
var Table = require('./Table.js');

var leitor = new Reader();


async function main(){
  var dados = await leitor.Read('./usuario.csv');
  var dadosProcessados =   Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.header);
}

main();