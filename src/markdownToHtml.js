export const markdownParser = string => {
  
}


// function markdownParser (markdown) {
  
//   let letters = 'abcdefghijklmnopqrstuvwxyz'
//   let hashes = markdown.split(" ")[0]
//   let text = markdown.split(" ")
  
//   for (let i of hashes) {
//     if (letters.includes(i)) {
//       return(markdown)
//     }
//   }
  
//   if (hashes.length > 6) {
//     return(markdown)
//   }
  
//   let textArr = []
//   for (let i = 1; i < text.length; i++) {
//     textArr.push(text[i])
//   }
//   htmlHeader = textArr.join(' ')
//   let num = hashes.length
//   return(`<h${num}>${htmlHeader}</h${num}>`)
// }