const coding =["js","ruby","java","Python","cpp"]


// coding.forEach( (item)=>{
//     console.log(item);
// } )

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
//     return num > 4
// } )
// console.log(newNums)

// const newNumbers = myNums.map((num) => num + 10)

// console.log(newNumbers);

// const newNumbers = myNums
// .map((num)=> num*10)
// .map((num)=> num+1)

// console.log(newNumbers);


// const myTotal = myNums.reduce((acc,currVal)=>{
//     console.log(`acc : ${acc}  and  currVal : ${currVal}`);
//     return acc + currVal 
// },0)

// console.log(myTotal);

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);



