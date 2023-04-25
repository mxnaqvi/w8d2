// empty arr
// iterate over the array
// check if item is within our new array
// if no add, if yes go to next ele
// return the new array

// Array.prototype.uniq = function() {
//     const arr = [];
//     for ( let i = 0; i < this.length; i++) {
//         if (!arr.includes(this[i])){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// let arrr = [1,2,2,3,3]

// console.log(arrr.uniq())


// function unique(arr) {
//     arr.forEach(element => {

//     });
// }


// n2 and n


// Array.prototype.twoSum = function() {
//     const new_arr = []
//     // iterate through array
//     for ( i = 0; i < this.length - 1 ; i++) {
//         for ( j = 1; j < this.length; j++) {
//            if (j > i && this[i] + this[j] === 0) {
//                 new_arr.push([i, j])
//             }
//         }
//     }
//     return new_arr
// }

// let new_arr = [1,-2,2,3,3]
// console.log(new_arr.twoSum())

// transposed = []
// col = 0; col < matrix[0].length col++
// transposed[col] = []
// row = 0; row < matrix.length row++
//transposed[col][row] = matrix[row][col]
// Array.prototype.tranSpose = function() {
//     const transposed = [];
//     for ( i = 0; i < this.length; i++ ) {
//         transposed.push([]);
//     }
//     for ( row = 0; row < this.length; row ++) {
//         for ( col = 0; col < this.length; col++ ) {
//         }
//     }
// }

Array.prototype.transpose = function() {
    const transposed = [];
    // for ( i = 0; i < this.length; i++ ) {
        // transposed.push([]);

    for (  i = 0; i < this[0].length; i++ ) {
        let row = [];
            for (  j = 0; j < this.length; j ++) {
            row.push(this[j][i]);
    }
    transposed.push(row);
}
return transposed;
}

// const arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr.transpose());
// Array.prototype.transpose = function() {
//     let transposedArray = [];
//     for (let i = 0; i < this.length; i++) {
//       let row = [];
//       for (let j = 0; j < this[i].length; j++) {
//         row.push(this[j][i]);/*from  w  w w . j a va  2 s  . c om*/
//       }
//       transposedArray.push(row);
//     }
//     return transposedArray;
//   }
//   const arr = [[1,2,3], [4,5,6], [7,8,9]];
//   console.log(arr.transpose());

Array.prototype.myEach = function(cb){
    for(i=0; i < this.length; i++){
        cb(this[i]);
    }
}

Array.prototype.myMap = function(cb){
    const new_arr = [];
    this.myEach(function(ele){
        new_arr.push(cb(ele))
    })
    return new_arr;
}

Array.prototype.myReduce = function(cb, initialVal) {
    let finalVal = 0
    if (initialVal === null){
        this.myEach(function(ele){
            finalVal += ele;
        }) } 
        else {
        finalVal = initialVal
        this.myEach(function(ele){
            finalVal += ele;
        })
    }
    return finalVal
}

