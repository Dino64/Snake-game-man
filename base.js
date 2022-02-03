let lastRender = 0
import { draw } from "./snakecode.js"
import { update } from "./snakecode.js"
//bestämmer hur snabbt ormen rör sig
// tex nu så är den två, två / 1 är 0,5 
//vilket betyder att det är en 
//halv sekund mellan valrje render
import { speed } from "./snakecode.js"
function main(currentTime) {
    window.requestAnimationFrame(main)

  const secondsSinceRender = (currentTime - lastRender) / 1000
  if (secondsSinceRender < 1 / speed)
    return
  // napraviom da ide konstantno bez prekida
  //nemoj zabaoravit vrndak slozit
  lastRender = currentTime

  update()
  draw()
}
window.requestAnimationFrame(main)
function update() {
  
}

function draw() {
  
}
