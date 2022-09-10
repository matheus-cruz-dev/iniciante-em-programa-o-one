function desenhaCirculo(evento) {
  let x = evento.pageX - tela.offsetLeft
  let y = evento.pageY - tela.offsetTop

  pincel.fillStyle = cores[corIndex]
  pincel.beginPath()
  pincel.arc(x, y, 10, 0, 2 * 3.14)
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

pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

tela.onclick = desenhaCirculo
tela.oncontextmenu = trocarCor
