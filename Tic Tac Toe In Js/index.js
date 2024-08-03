var currentPlayer = 'X';
const text = document.querySelector(".text")
const div = document.getElementById('game')

const col = document.querySelectorAll(".col")

arr = Array(9).fill(null);
const btn = document.getElementById('btn');
btn.style.display = 'none';


function checkWinner(){
    if( 
        (arr[0]  !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3]  !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6]  !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0]  !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1]  !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2]  !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0]  !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2]  !== null && arr[2] === arr[4] && arr[4] === arr[6]) 
    ){
        text.innerText = `Winner Is ${currentPlayer}`
        div.style.display = 'none';
        btn.style.display = 'block';
    }
    else if(arr.every(cell => cell !== null)){
        // Check for a draw condition
        text.innerText = 'Match is a Draw!';
        div.style.display = 'none';
        btn.style.display = 'block';
    } 
}

btn.addEventListener("click", ()=>{
    location.reload();
})

function handleClick(el){
    const id = Number(el.id);
    if(arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer
    checkWinner()
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    console.log(arr);
}
