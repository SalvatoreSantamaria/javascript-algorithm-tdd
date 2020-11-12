//export const getLetterCount = string => ({}); // just to test that an empty object (ie, that the test is working)

export const getLetterCount = string => {
  const letters = string.split('');

  let obj = {};

  for (let i of letters) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i]++
    }
  }
  return(obj)
};