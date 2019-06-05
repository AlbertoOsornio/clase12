let myTime= Date.now()

const endTime = myTime + 3000

function printTwo(){
    console.log(2)
}

console.log(1)

while(myTime<endTime){
    myTiime = Date.now()
}

setTimeout(printTwo,0)
console.log(3)