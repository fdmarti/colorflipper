import 'boxicons'
import './style.css'

const buttonAction = document.querySelector('.btn');

const namecolor = document.querySelector('.name-color')

const variables = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];

buttonAction.addEventListener('click', () => {

  const arrayResult = [];

  for (let i = 0; i <= 5; i++) {
    arrayResult.push(variables[getRandomNumber()])
  }

  document.body.style.backgroundColor = `#${arrayResult.join('')}`
  namecolor.innerHTML = `#${arrayResult.join('')}`

})

const getRandomNumber = () => Math.floor(Math.random()*16)

