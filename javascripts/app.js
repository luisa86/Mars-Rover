var rover = {
   direction: "N",
   x: 0,
   y: 0,
   travelLog: [0, 0]
};

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
  }
  console.log("turnLeft was called!");

}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if(rover.direction === "N"){
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if(rover.direction === "W") {
    rover.x -= 1;
  }
  console.log("moveForward was called");
}

function moveBackward(){
  if(rover.direction === "N"){
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x -= 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if(rover.direction === "W") {
    rover.x += 1;
  }
  console.log("moveBackward was called");
}

function roverAttack (movements) {
  for(var i = 0; i<movements.length; i++){
    switch (movements[i]){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
    }
  }
  
  console.log("The rover is here: " + [rover.X, rover.Y]);
  console.log("The rover was here: " + rover.travelLog);
}
