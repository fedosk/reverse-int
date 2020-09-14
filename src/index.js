module.exports = function reverse (n) {
    let array = n.toString().split('');
    if(array[0] === '-') {
        array.reverse().pop();
        return +array.join('');
    } else {
        return +array.reverse().join('');
  }
}

