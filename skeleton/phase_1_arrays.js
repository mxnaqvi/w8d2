// empty arr
// iterate over the array
// check if item is within our new array
// if no add, if yes go to next ele
// return the new array

Array.prototype.uniq = function() {
    const arr = [];
    for ( let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])){
            this.push(this[i]);
        }
    }
    return arr;
}

let arrr = [1,2,2,3,3]

console.log(arrr.uniq())


// function unique(arr) {
//     arr.forEach(element => {
        
//     });
// }

