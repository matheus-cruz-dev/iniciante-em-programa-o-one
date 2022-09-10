function desenhaCirculo(evento) {
  let x = evento.pageX - tela.offsetLeft
  let y = evento.pageY - tela.offsetTop

  if (evento.shiftKey && raio < 40) {
      raio = raio + 10
  }

  if (evento.altKey && raio > 10) {
      raio = raio - 5
  }
  if (evento.onmousemove) {
    
  }

  pincel.fillStyle = cores[corIndex]
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * 3.14)
  pincel.fill()
}

function trocarCor() {
  if (corIndex < cores.length - 1) {
    corIndex++
  } else {
    corIndex = 0
  }

  return false
}

let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')
let cores = ['blue', 'red', 'green']
let corIndex = 0
let raio = 10

pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

tela.onclick = desenhaCirculo
tela.oncontextmenu = trocarCor
