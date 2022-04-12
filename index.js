const questions =[
    "o que eu aprendi hoje",
    " o que mais me frustrou?",
    "o que me deixou feliz hoje?",
    "quantas pessoas eu ajudei hoje",
]

const ask = (index = 0)=>{
    process.stdout.write(questions[index] + "\n")
}

const answers = []
ask()
process.stdin.on("data",data=>{
    answers.push(data.toString().trim())
    if (answers.length< questions.length){
        ask(answers.length)
    }else {
       process.exit()
    }
})

process.on('exit',()=>{
    console.log(`
    Bacana Tomate

    O que voce aprendeu hoje foi
    ${answers[0]}

    o que mais te frustrou foi
    ${answers[1]}

    o que mais te deixou feliz foi
    ${answers[2]}

    e voce ajudou ${answers[3]} pessoas
`)
})