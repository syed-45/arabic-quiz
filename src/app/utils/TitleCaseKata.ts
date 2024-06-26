export function titleCase(title: string, minorWords?: string) {
  if (!title) return ""; // Handle empty title
  
  // Convert minor words to a set of lowercase words for quick lookup
  const minorWordsSet = new Set(minorWords ? minorWords.toLowerCase().split(' ') : []);
  
  // Split the title into words
  const words = title.split(' ');
  
  // capitalise the first word
  let newTitle = [capitalise(words[0])];
  
  // Process the remaining words
  for (let i = 1; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (minorWordsSet.has(word)) {
      newTitle.push(word);
    } else {
      newTitle.push(capitalise(word));
    }
  }
  
  // Join the words into the final title case string
  return newTitle.join(' ');
}

function capitalise(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
