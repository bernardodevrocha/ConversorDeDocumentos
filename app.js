var Reader = require('./Reader.js');
var Writter = require('./Writter.js');
var Processor = require('./Processor.js');
var Table = require('./Table.js');
var HtmlParser = require('./HtmlParser.js');
var PDFWriter = require('./PDFWriter.js');

var leitor = new Reader();
var escritor = new Writter();

async function main(){
  var dados = await leitor.Read('./usuario.csv');
  var dadosProcessados =   Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);


  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();