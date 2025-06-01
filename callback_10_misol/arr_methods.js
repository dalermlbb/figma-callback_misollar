// at(index)

// function elementniTop(array, index) {
//   let result = array.at(index)
//   return result
// }

// console.log(elementniTop(["a", "b", "c", "d"], -2)); // "c"


// toString(), join()

// const son = 4589;

// let str = son.toString()
// let str = son.join(" ")
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
  
  
// }




// push(), pop()

// let arr = [1,2,3,4,5,6,7,8,9]

// let result = []

// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] % 2 == 0)) {
        
//         result.push(arr[i])
//     }
    
// }

// console.log(arr);



// let mevalar = ["olma", "anor", "banan"];

// mevalar.pop()

// console.log(mevalar); 

// unshift(), shift()

// function getStarwith(str) {
// if (!(str.startsWith('salom'))) {
//     let arr = str.split()
//     arr.unshift('salom')
//     return arr.join(' ')
// }else{
//     return str
    
// }    
// }

// console.log(getStarwith('dunyo'));

// function arrShift(arr) {
//     let boshi = arr.at(0)

//   if (boshi % 2 == 0) {
//     arr.shift()
//     return arr
//   }else{
//     return arr
//   }
// }

// console.log(arrShift([8,2,3,4,5,6,6,7,5]));




// reverse() vs toReversed()

// function reverse(arr) {
//     let oxirgi = arr.at(-1)

//     if (!(oxirgi % 2 == 0)) {
//         return arr.reverse()
//     }else{
//         return arr
//     }
// }

// console.log(reverse([8,2,3,4,5,6,6,7,5]));


// function reverse(arr) {
//     let result = null
//     let oxirgi = arr.at(-1)

//     if (!(oxirgi % 2 == 0)) {
//         result = arr.toReversed()
//         return result
//     }else{
//         return arr
//     }
// }

// console.log(reverse([8,2,3,4,5,6,6,7,5]));


// splice(startIndex, countOfElementDeleted, elementAdded1, elementAdded2, …)

// let arr = [1,'d',3,4,5,6,7,8,9]

// arr.splice(1,1,2)

// console.log(arr);


// fill(value, startIndex, endIndex) [startIndex, endIndex)


let arr = []
