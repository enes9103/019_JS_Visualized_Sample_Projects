// ! email validation

let input = document.querySelector(".input");
let check = document.querySelector(".check");
let resultEmail = document.querySelector(".resultEmail");

check.addEventListener("click", controller);

function controller() {
  let dot = input.value.indexOf("."); // "." nın indeksini bulduk
  let slc = input.value.slice(dot + 1) //  slice ile "." nın indeksi + 1 den sonuna kadar döndür // slice(start, end)

  if (input.value.includes("@") && input.value.includes(".") &&
    (slc.length >= 2 && slc.length <= 3)) {                    // "@" "." value içerisinde varsa ve . dan sonraki kısım iki veya üç uzunluğunda ise 
    resultEmail.innerText = "Valid e-mail"
  } else {
    resultEmail.innerText = "Invalid e-mail"
  }
  setTimeout(() => {
    input.value = ""
    resultEmail.innerText = ""
  }, 4000);
}

// ! count digits

const low = document.getElementById('lownumber')
const high = document.getElementById('highnumber')
const search = document.getElementById('searchnumber')
const btn1 = document.getElementById('btn1')
const resultDigit = document.querySelector('.resultDigit')

btn1.addEventListener('click', count)
function count() {
  let counter = []
  for (let i = +low.value; i < +high.value + 1; i++) {
    String(i).includes(+search.value) && counter.push(i)
  }
  resultDigit.innerText = `There are ${counter.length} digit numbers. \n These: ${counter}`

  setTimeout(() => {
    low.value = ""
    high.value = ""
    search.value = ""
    resultDigit.innerText = ""
    counter = []
  }, 4000);
}

// ! Capital Letters

let text = document.querySelector('#textArea');
let buton = document.querySelector('#button');
let output = document.querySelector('#bos');

buton.addEventListener('click', cap);
function cap() {
  let str = text.value.trim().replace(/\s+/g, ' ').split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1).toLowerCase();
  }

  output.innerText = str.join(' ')
  setTimeout(() => {
    text.innerText = ""
    output.innerText = ""
  }, 4000);
}

// ! Palindromic and Perfect Numbers Lists

const lowlmit = document.getElementById('number10')
const toplimit = document.getElementById('number20')
const btnpalin = document.getElementById('btn10')
const btnperfect = document.getElementById('btn20')
const palinlist = document.getElementById('palin')
const perfectlist = document.getElementById('perfect')

function getpalin() {
  let palinarr = []
  for (let i = +lowlmit.value; i < +toplimit.value; i++) {
    if (i < 10) {
      palinarr.push(i.toString())
    } else {
      if (i.toString()[0] == i.toString()[i.toString().length - 1]) {
        palinarr.push(i.toString())
      }
    }
  }
  palinlist.textContent = palinarr
}

function is_perfect(number) {
  let temp = 0
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i
    }
  }

  if (temp === number && temp !== 0) {
    return true
  } else {
    return false
  }
}

function getperfect() {
  let perfectarr = []

  for (let i = +lowlmit.value; i < +toplimit.value / 2; i++) {
    if (is_perfect(i)) {
      perfectarr.push(i)
    }
  }

  perfectlist.textContent = perfectarr

  setTimeout(() => {
    perfectlist.innerText = ""
    palinlist.innerText = ""
    toplimit.value = ""
    lowlmit.value = ""
  }, 5000);
}

btnpalin.addEventListener('click', getpalin)
btnperfect.addEventListener('click', getperfect)

// ! TR Identity Number Validation
const trid = document.getElementById('tr')
const btn3 = document.getElementById('btn3')
const idText = document.querySelector('.idText')

btn3.addEventListener('click', () => {
  let id = trid.value.split('')
  let sum1 = 0
  let sum2 = 0
  let isValid = false
  if (id.length == 11 && id[0] != 0) {
    for (let i = 0; i < 9; i = i + 2) {
      sum1 += +id[i]
      sum2 += +id[i + 1]
    }
    sum2 = sum2 - +id[9]

    if (id[9] == (sum1 * 7 - sum2) % 10) {
      if (id[10] == (sum1 + sum2 + +id[9]) % 10) {
        isValid = true
      }
    }
  }
  idText.textContent = `Your id number is ${isValid ? 'valid. ' : ' invalid.'} `
  setTimeout(() => {
    idText.textContent = ""
    trid.value = ""
  }, 4000);
})

// ! Vowels in a string

const area2 = document.getElementById('text2')
const btn6 = document.getElementById('btn6')

let counter2 = 0
btn6.addEventListener('click', () => {
  let area2rslt = area2.value
  for (let i = 0; i < area2rslt.length; i++) {
    if (
      area2rslt[i].includes('a') ||
      area2rslt[i].includes('e') ||
      area2rslt[i].includes('ı') ||
      area2rslt[i].includes('i') ||
      area2rslt[i].includes('o') ||
      area2rslt[i].includes('ö') ||
      area2rslt[i].includes('u') ||
      area2rslt[i].includes('ü') ||
      area2rslt[i].includes('A') ||
      area2rslt[i].includes('E') ||
      area2rslt[i].includes('I') ||
      area2rslt[i].includes('İ') ||
      area2rslt[i].includes('O') ||
      area2rslt[i].includes('Ö') ||
      area2rslt[i].includes('U') ||
      area2rslt[i].includes('Ü')
    ) {
      counter2 += 1
    }
  }
  const newtag = document.createElement('p')
  newtag.innerText = `There are ${counter2} vowels in ${area2rslt} `
  document.getElementById('vowels').appendChild(newtag)
  
  setTimeout(() => {
    newtag.innerText = ""
    area2.value = ""
  }, 4000);
})

// !  Lottery Game

let giris = document.querySelector("#number");
let lotteryButon = document.querySelector(".lotteryButton");
let lotteryContainer = document.querySelector(".lotteryContainer");

function myNumber() {
  return (Math.floor(Math.random() * 90 + 1) + "").padStart(2, "0");
}

function kupon() {
  let list = []
  while (list.length < 6) {
    let sayi = myNumber()
    if (!list.includes(sayi)) {
      list.push(sayi);
    }
  }
  return list.sort()
}

lotteryButon.addEventListener("click", run);
function run() {
  if (giris.value == 9 || giris.value < 1) {
    alert('Please enter a number between 1 and 8 to generate sets')

  } else {
    for (let i = 0; i < giris.value; i++) {
      let newP = document.createElement("p");
      let newText = `${kupon().join(" - ")}`
      newP.innerText = newText
      lotteryContainer.appendChild(newP);
    }
    let newP2 = document.createElement("p");
    let newText2 = `GOOD LUCK...`
    newP2.innerText = newText2
    lotteryContainer.appendChild(newP2);
  }
  setTimeout(() => {
    lotteryContainer.children[1].remove();
    lotteryContainer.children[1].remove();
    lotteryContainer.children[1].remove();
    giris.value = ""
  }, 5000);
}

// ! Student Registration

const data = [
  'C1234 - John Doe, London, Full-Stack',
  'C2345 - Jane Doe, London, Data-Science',
  'C2346 - Mary Ann, Paris, AWS-Devops',
  'C2347 - Adam Smith, Texas, AWS-Devops',
  'C2444 - Michael Great, Arizona, Full-Stack',
  'C2555 - William Cash, Manchester, Data-Science',
  'C2455 - Patrick Jane, Madrid, Full-Stack',
]

const div = document.getElementById('table')
const tablebody = document.createElement('table')
const headtable = `
<tr>
  <th>St Nr</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Location</th>
  <th>Path</th>
</tr>`

tablebody.innerHTML = headtable
div.appendChild(tablebody)

data.forEach((datainfo) => {
  let rowtable = datainfo.split(',')
  let rowresult = rowtable[0].split('-')

  let rowname = rowresult[1].split(' ')
  for (let index = 0; index < 1; index++) {
    const inner = `
      <tr>
        <td>${rowresult[0]}</td>
        <td>${rowname[1]}</td>
        <td>${rowname[2]}</td>
        <td>${rowtable[1]}</td>
        <td>${rowtable[2]}</td>
      </tr>`

    tablebody.innerHTML += inner
  }
})

// !  Simple Calculator

let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let operator = document.querySelector(".operator");
let calculate = document.querySelector(".calculate");
let title = document.querySelector(".title");

calculate.addEventListener("click", calc);

function calc() {
  let snc;
  if (operator.value == "+") {
    snc = Number(number1.value) + Number(number2.value)
  } else if (operator.value == "-") {
    snc = Number(number1.value) - Number(number2.value)
  } else if (operator.value == "*") {
    snc = Number(number1.value) * Number(number2.value)
  } else if (operator.value == "/") {
    snc = Number(number1.value) / Number(number2.value)
  }
  title.innerHTML = `${number1.value} ${operator.value} ${number2.value} = ${snc}`

  setTimeout(() => {
    title.innerHTML = ""
    number1.value = ""
    number2.value = ""
    operator.value = ""
  }, 4000);
}

// ! Draw Diamond with Star Character

const starsnumber = document.getElementById('stars')
const outline = document.getElementById('outline')

function reverse(s) {
  return s.split('').reverse().join('')
}

starsnumber.addEventListener('change', (e) => {
  val = e.target.value
  double = e.target.value * 2
  let innerstar = ''
  let str = ''
  let space = ' '

  for (j = 0; j < double; j++) {
    if (j < val) {
      str = `*${space.repeat(j, ' ')}`
      let result = str.padStart(val, ' ')
      innerstar = `${innerstar}${result + reverse(result)}\n`
    }

    if (j > val) {
      str = `*${space.repeat(double - (j + 1), ' ')}`
      let result2 = str.padStart(val, ' ')
      innerstar = `${innerstar}${result2 + reverse(result2)}\n`
    }
  }
  outline.textContent = innerstar
  setTimeout(() => {
    outline.textContent = ""
    starsnumber.value = ""
  }, 4000);
})







