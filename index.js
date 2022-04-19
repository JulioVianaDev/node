const timeOut= 3000
const finished = ()=>console.log("done")

let timer = setTimeout(finished,timeOut)

clearTimeout(timer)

const timeOut2 = 1000

const checking = ()=>console.log('checkint')

let interval = setInterval(checking,timeOut2)

setTimeout(()=>clearInterval(interval),4000)