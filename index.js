function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        debugger;  
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(z) {
    let num = z;
    while(num >=0) {
        console.log(num)
        num--
    }
}
countDown(22)