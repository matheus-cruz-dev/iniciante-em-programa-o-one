function desenhaEsquadro(xa, ya, xc, yc, cor) {
  pincel.fillStyle = cor
  pincel.beginPath()
  pincel.moveTo(xa, ya)
  pincel.lineTo(xa, yc)
  pincel.lineTo(xc, yc)
  pincel.fill()
}

let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

desenhaEsquadro(50, 50, 400, 400, 'black')
desenhaEsquadro(100, 175, 275, 350, 'white')