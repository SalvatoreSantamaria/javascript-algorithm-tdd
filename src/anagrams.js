export const anagramsFunction = (string1, string2) => {
  if (string1 && string2) {
    return sorter(string1) == sorter(string2)
  } else {
    return {}
  } 
}

let sorter = (str) => {
  return str.split('').sort().join('')
}

