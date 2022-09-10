function sorteia() {
  return Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade) {
  let segredos = []

  let i = 0

  while (i < quantidade) {
    let numeroAleatorio = sorteia()

    if (numeroAleatorio !== 0) {
      let achou = false

      for (let i = 0; i < segredos.length; i++) {
        if (segredos[i] == numeroAleatorio) {
          achou = true
          break
        }
      }

      if (achou == false) {
        segredos.push(numeroAleatorio)
        i++
      }
    }
  }

  return segredos
}

let segredos = sorteiaNumeros(5)

let input = document.querySelector('input')
input.focus()

function program() {
  let achou = false

  for (let i = 0; i < segredos.length; i++) {
    if (input.value == segredos[i]) {
      alert('Você acertou!')
      achou = true
      break
    }
  }

  if (achou == false) {
    alert('Você errou!')
  }

  input.value = ''
  input.focus()
}
