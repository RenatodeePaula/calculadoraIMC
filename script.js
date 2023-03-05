const name = document.getElementById('name');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.querySelector ('button')
const textArea = document.querySelector('#resultado')

button.addEventListener('click', calc)

function calc () {   
   let result = weight.value / (height.value * height.value) 
   let condicao = ''
    if (name.value.length < 1 ||  height.value.length < 1 ||name.value.length < 1){
    alert('Por favor preencha todos os campos!')
    return
   } else if (result < 1 || result > 60) {
    alert('Valores incorretos, digite novamente')
    return
   }  else if (result <= 18.5) {
    condicao = 'abaixo do peso normal'
   } else if (result > 18.8 && result <= 24.9 ) {
    condicao = 'no peso ideal'  

   } else if (result > 24.9 && result <= 39.9) {
    condicao = 'obeso'
   } else if (result > 39.9) {
    condicao = 'em obesidade mórbida'
   }  
     textArea.innerText = `${name.value}, seu IMC é de ${result.toFixed(2)} e você está ${condicao}. `   
}

 



