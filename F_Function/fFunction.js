function convertBinaryToArray(binary, binaryLength){
  const binaryString = binary.toString(2).padStart(binaryLength, "0")
  return binaryString.split("")
}

function convertToBBits(rBitsArray, cBitsArray){
  return [...rBitsArray] + [...cBitsArray]
}

function convertBBitsTo25Words(bBitsArray){
  // Get the length of each word
  const wordLength = bBitsArray.length / 25

  const state = []

  // Create state
  for(let z = 0; z < wordLength; z++){
    state[z] = []
    for(let y = 0; y < 5; y++){
      state[z][y] = []
      for(let x = 0; x < 5; x++){
        state[z][y][x] = []
      }
    }
  }

  // Populate state
  for(let z = 0; z < wordLength; z++){
    for(let y = 0; y < 5; y++){
      for(let x = 0; x < 5; x++){

      }
    }
  }

  return state
}

function fFunction(rBits, rBitsLength, cBits, cBitsLength, l){
  const rounds = 12 + 2 * l
  const wordLength = 2 ** l
  for(let round = 0; round < rounds; round++){
  }
}

module.exports = fFunction


const bBits = 0b0000011111000001111100000
const bBitsArray = convertBinaryToArray(bBits, 25)
console.log(bBitsArray)
console.log(convertBBitsTo25Words(bBitsArray))