function ageInMonths() {
  var birthYear = prompt('What year were you born in my friend??')
  let monthNumbers = (2020 - birthYear) * 12;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('You are ' + monthNumbers + ' months old');
  h1.setAttribute('id', 'ageInDays')
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}
