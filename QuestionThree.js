//Questionthree

function getClockAngle(str) {
  let arr = str.split(":");

  if (arr[0] > 12) {
    arr[0] = (parseInt(arr[0]) - 12).toString();
  }

  let minAngle = parseInt(arr[1]) * 6; //120
  let hourAngle = parseInt(arr[0] * 30 + arr[1] * 0.5); 
  let result = Math.abs(hourAngle - minAngle)
  return result
}

console.log(getClockAngle("19:20"));
