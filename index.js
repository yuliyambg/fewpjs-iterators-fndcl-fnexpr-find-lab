const testVar = {}

// function testFunc() {
//   return "hi"
// }


function superbowlWin(games) {
  const win = games.find(function(game) {
    return game.result === "W"
  })

  return win === undefined ? undefined: win.year
  // if(win !== undefined){
  //   return win.year
  // }
  //
  // return undefined
}
