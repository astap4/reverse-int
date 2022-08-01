module.exports = function reverse (n) {
   n = Math.abs(n)
   let array1 = Array.from(n.toString(), Number)
   console.log(array1);
   let array2 = [];
   array2.length = array1.length
   console.log(array2.length)
   for (let i = 0; i<array2.length; i++) {
      array2[i]=array1[array1.length-1-i]
   }
   console.log(array2);
   let newNumber = +array2.join('')
   return newNumber
}
