function convertTo25Words(rBits, rBitsLength, cBits, cBitsLength, wordLength){
  const rBitsString = rBits.toString(2).padStart(rBitsLength, "0")
  const cBitsString = cBits.toString(2).padStart(cBitsLength, "0")
  const bBitsString = rBitsString + cBitsString
  const bBits = parseInt(bBitsString, 2)

  console.log(bBitsString)
}

function theta(){

}

function rho(){

}

function pi(){

}

function chi(){

}

function iota(round){

}

function fFunction(rBits, rBitsLength, cBits, cBitsLength, l){
  const rounds = 12 + 2 * l
  const wordLength = 2 ** l
  for(let round = 0; round < rounds; round++){

  }
}

module.exports = fFunction

const rBits = 0b101
const cBits = 0b011
convertTo25Words(rBits, 3, cBits, 3, 64)