const assertEqual = require('./assertEqual');

const tail = function(array) {

  //removes first element in array (i.e. head)
  const tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;



