//write your code here
function distanceFromHqInBlocks(block) {
  const hqBlock = 42;
  return Math.abs(hqBlock - block);
  }
  function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination);
  if (feetTraveled <= 400) {
  return 0;
  } else if (feetTraveled <= 2000) {
  return (feetTraveled - 400) * 0.02; 
  } else if (feetTraveled <= 2500) {
  return 25; 
  } else {
  return 'cannot travel that far'; 
  }
  }
  
  module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
  };
  
  