//Promise async/await
//Future then/catch

// console.log(1)
// setTimeout(() => console.log(2), 1000) //run after 1 sec
// console.log(3)

//Promise
const delay = ms =>{
    return new Promise(
        (resolve, reject) =>{
            setTimeout(() =>{
                // reject('Failure')
                resolve('Success') //success statement/callback
            }, ms)
        }
    )
}

const promiseCall = async () =>{
    console.log("Start")

    try{
        const res = await delay(5000)//blocking 
        console.log(res) // resolves value
    }catch(err){
        console.log(err)
    }

    delay(1000)//non-blocking 
        .then(msg => console.log(msg))
        .catch(err => console.log(err))//wait for promise to resolve

    console.log("End")   
}
promiseCall()

const sequentialPromise = async () => {
    console.time("sequentialPromise")
    const res1 = await delay(3000)
    console.log(res1)
    const res2 = await delay(5000)
    console.log(res2)
    //wait time is sum of both
    console.timeEnd("sequentialPromise")
}
sequentialPromise()

const parallelPromise = async () => {
    console.time("parallelPromise")
    const [res1, res2] = await Promise.all([
        delay(3000),
        delay(5000)
    ]) // wait time is the max of both
    console.log(res1, res2)
    console.timeEnd("parallelPromise")
}
parallelPromise()


//Promise on delay function add another argument, num
//if num % 2 == 0, resolve after ms
//else reject after ms
//simulate(1000, 1500, 2000, 2500, 3000)
//run this both parallely and sequentially
//catch the errors in parallel execution with Promise.allSettled
//make a new function
//log the resolved and rejected values seperately
//using non-blocking , then, run 1000, 2000, 3000 sequentially

const delayy = (ms, num) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() =>{
                num%2===0
                ? resolve(`Resolved : ${num}`)
                : reject(`Rejected : ${num}`)

            }, ms)
        })
}

delayy(2000, 3)
.then(res =>{
    delayy(1000, 4)
    .then(res2 =>{
        console.log(res2)
        delayy(3000, 5)
        .then(res3 => console.log(res3))
        .catch(err3 => console.log(err3))
    })
    .ca
})

        