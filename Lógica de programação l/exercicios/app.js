function program() {
  let tanque = 40

  let caminhoComGasolina = 480
  let caminhoComAlcool = 300

  let consumoDeGasolina = caminhoComGasolina/tanque
  let consumoDeAlcool = caminhoComAlcool/tanque

  document.write('O consumo de Gasolina será de ' + consumoDeGasolina + ' km por litro, percorrendo ' + caminhoComGasolina + ' km, com ' + tanque + ' litros de Gasolina.<br>')
  document.write('O consumo de Alcool será de ' + consumoDeAlcool + ' km por litro, percorrendo ' + consumoDeAlcool + ' km, com ' + tanque + ' litros de Alcool.<br>')
}