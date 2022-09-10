let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * 3.14)
  pincel.fill()
}

function desenhaFlor() {
  desenhaCirculo(300, 200, 10, 'red')
  desenhaCirculo(300, 180, 10, 'yellow')
  desenhaCirculo(280, 200, 10, 'orange')
  desenhaCirculo(320, 200, 10, 'black')
  desenhaCirculo(300, 220, 10, 'blue')
}

desenhaFlor()