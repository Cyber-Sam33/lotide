const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const countLetter = function(sentence){
  results = {};
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[.,?'/!:&();" ]/g,"");

  //loop over the string
  for (character of sentence){
    if (results[character]){
      results[character] += 1;
    } else {
      results[character] = 1;
    }
  }
  return results;
}

sentence1 = "So foul and fair a day; I have not seen!"

console.log(countLetter(sentence1));