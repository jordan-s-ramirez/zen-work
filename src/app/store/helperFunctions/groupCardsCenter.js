export function groupCenter(currData) {
  for(let i=0; i < currData.length; i++) {
    currData[i].windowAnimation = {
      x:0,
      y:0,
      duration:1
    }
  }

  return currData
}