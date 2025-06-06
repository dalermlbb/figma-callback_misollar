/*
function main(callback) {
    let user = {name:'daler',age:17}
    setTimeout(()=>{
        callback(user)
    },2000)
}

main((data)=>{
    console.log(data);    
});
*/

//____________________________________________________________________

/*
// function processData(data, callback) {
//     callback(data)
// }

// processData(7,(kvadrati)=>{
//     console.log(kvadrati * 2);
    
// })

*/

//______________________________________________________________________

// function main(a, b, callback) {
//   const sum = a + b;
//   callback(sum);
// }

// function showResult(result) {
//   console.log(result);
// }

// main(5, 3, showResult);  

//_____________________________________________________________________

/*function main(a,b,callback) {
    let Natija = callback(a,b)
    console.log("natjani",Natija);
    
}

function qoshish(x,y){
    return x + y
}
function ayrish(x,y){
    return x - y
}
function kopaytirish(x,y){
    return x * y
}
function bolish(x,y){
    return x / y
}

main(8,2,kopaytirish) 
*/

//___________________________________________________________________


function buyurtmaBerish(ovqat,callback) {
    console.log(ovqat + ' tayorlanmoqda iltimos biroz kutin...');

    setTimeout(()=>{
        console.log(ovqat,' tayor boldi!');
        callback()
    },2000)
    
}

function ovqatniOlibKetish() {
    console.log('ovqatingiz olib ketishingiz mumkin');
    
}

buyurtmaBerish('somsa',ovqatniOlibKetish)