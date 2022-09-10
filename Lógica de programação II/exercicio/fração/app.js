let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor
  pincel.fillRect(x, y, tamanho, tamanho)
  pincel.fillStroke = 'black'
  pincel.strokeRect(x, y, tamanho, tamanho)
}

function desenhaTexto(texto, x , y) {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');

  pincel.font='20px Georgia';
  pincel.fillStyle='black';
  pincel.fillText(texto, x, y);    
}

desenhaTexto("Qual é a fração?", 50, 30);

desenhaQuadrado(50, 50, 100, 'green')
desenhaQuadrado(150, 50, 100, 'green')
desenhaQuadrado(250, 50, 100, 'green')
desenhaQuadrado(350, 50, 100, 'white')
