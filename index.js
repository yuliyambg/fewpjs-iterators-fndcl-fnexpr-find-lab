const testVar = {}

// function testFunc() {
//   return "hi"
// }


function superbowlWin(games) {
  const win = games.find(game => {
    return game.result === "W"
  })

  if(win !== undefined){
    return win.year
  }

  return undefined

  // return win === undefined ? undefined: win.year
}
