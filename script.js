const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset_btn = document.querySelector('#reset')
const search_btn = document.querySelector('#search')
const text = document.querySelector('#text')
let original = text.innerHTML

// define more constants and variables here

btn_toggle.onclick = () => {
  if (btn_toggle.innerHTML == "Show Calculation") {
    const sum = parseInt('630610725') + parseInt(length.value)
    author.innerHTML = sum;
    btn_toggle.innerHTML = 'Show Author'
  } else{
    btn_toggle.innerHTML = 'Show Calculation'
    author.innerHTML = '630610725 Chommanee Rujijanakul';
  }
}


// more codes for Search and Reset buttons here
let word = []
search_btn.onclick = () => {
  let newPara = ''
  word = original.split(' ');
  for (let i = 0; i <= word.length; i++) {
    if (word[i].length >= length.value) {
      newPara += "<span style = ' color: " + color.value + "'>" + word[i] + "</span>" + " ";
    }else{
      newPara += word[i] + " ";
    }
    text.innerHTML = newPara
  }
}

reset_btn.onclick = () => {
  color.value = "#FF0000"
  length.value = 5
  text.innerHTML = original
}
