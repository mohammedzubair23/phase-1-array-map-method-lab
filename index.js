const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map((line)=> {
      //* split each string into individuals word strings
   const words = line.split(" ")
      //* capitalized each word from words 
    const capitalizedWords = words.map((word)=> {
      //* separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
      //* capitalized the first letter and add the rest of the word back to the capitalized letter
        return word.charAt(0).toUpperCase() + word.slice(1)

    })
          return capitalizedWords.join(" ")
  })

}
