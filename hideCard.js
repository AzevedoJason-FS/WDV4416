const hideCard = (card) => {
  // return an * repeated by the length of the provided number MINUS the last 4 digits. 
  // Then immediately after takes 4 last characters of string
  if(card.length < 12 || card.length > 16){
    return "Invalid Credit Card"
  }
  else{
    return `${'*'.repeat(card.length - 4)}${card.substring(card.length - 4)}`
  }
}

module.exports = hideCard

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring