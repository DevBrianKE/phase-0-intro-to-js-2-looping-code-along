function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        debugger;  
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

debugger;  

writeCards(["Charlie", "Samip", "Ali"], "birthday");


// function countDown(number) {
//     for (let i = number; i >= 0; i--){
//         console.log(i)
//     }
// }

// countDown(10)

function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i--)
    }
}
countDown(10)