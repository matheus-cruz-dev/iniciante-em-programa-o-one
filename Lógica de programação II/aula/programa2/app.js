let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

function desenhaQuadrado(x, y, cor) {
  pincel.fillStyle = cor
  pincel.fillRect(x, y, 50, 50)
  pincel.fillStroke = 'black'
  pincel.strokeRect(x, y, 50, 50)
}

for (let i = 0; i < 600; i = i + 50) {
  desenhaQuadrado(i, 0, 'green')
}
