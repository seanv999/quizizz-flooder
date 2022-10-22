//Sean Vonhauger
let a;
let n;
const input = () => {
    n = prompt("Name of bots: ")
    if(n == ''){
        alert('Name Needs A Value!')
        throw('Name Needs A Value!')
    }
    a = parseInt(prompt("How Many Bots: "));
    if(a <= 0 || a == NaN){
        alert('Amount Needs A Valid Number!')
        throw('Amount Needs A Valid Number!')
    }
  
}

const entryPoint = Object.values(document.querySelector("#root"))[1]._context.provides.store
client = {
    hostId: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.hostId,
    roomHash: JSON.parse(JSON.stringify(entryPoint.getState())).game.data.roomHash,
    localPlayer: JSON.parse(localStorage.previousContext).currentPlayer.playerId
}

const flood = (o, t) => {
    for (i = 0; i < t; i++){
        entryPoint._actions.connectSocket[0](), entryPoint._actions.joinRoom[0]({
        roomHash: client.roomHash,
        playerId: `${o}-${i}`});
        console.log(`${i}/${t} Bots Connected!`)
    }
}

input()
flood(n, a)
