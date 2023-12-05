let heading = document.getElementById('heading')
let btn = document.getElementById('btn')
let boxes = Array.from(document.getElementsByClassName('box'))

const sign_1 = "o"
const sign_2 = "x"
let currentPlayer = sign_2
let work_area = Array(9).fill(null)
let winner = document.getElementById("winner")

let finished = false;
let counter = 0;

const start = () => {
    boxes.forEach(box => box.addEventListener('click', AreaClicked) )
}

function AreaClicked(i){
      const id = i.target.id
      if (finished) return;

      if (! work_area[id]) {                        /* !work_area[id] mean if work area is null or has not value */
        work_area[id] = currentPlayer
        i.target.innerText = currentPlayer   /*  ???????? */
        


        if(playerHasWon() !==false){
          winner.style.visibility = "visible";
          winner.innerText = `${currentPlayer} is The Winner`
        
        } else {
          counter++;
        } 
        
        if (counter === 9){
          winner.style.visibility = "visible";
          winner.innerText = `It's Tie`
          finished = true;
        }

        if (currentPlayer == sign_2){
          currentPlayer = sign_1
        } 
        else{
          currentPlayer = sign_2
        }
      } 
      
      }

const Winning_Conditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
 
function playerHasWon() {
     for (const condition of Winning_Conditions){
      let [a,b,c] = condition

      if(work_area[a] && (work_area[a] == work_area[b]) && (work_area[a] == work_area[c])) {
          finished = true;
          return [a,b,c]
      }
     }
     return false
}


btn.addEventListener('click', restart)

function restart() {
  work_area.fill(null)

  counter = 0;
  finished = false;

  boxes.forEach( box =>{
    box.innerText = ''
  })
   
   winner.style.visibility = "hidden";
   currentPlayer = sign_2
}

start()