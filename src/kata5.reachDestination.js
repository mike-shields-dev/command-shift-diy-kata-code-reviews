const reachDestination = (distance, speed) => {
  const timeToDestination = distance / speed;
  const roundedTime = Math.round(timeToDestination * 2) / 2;
  return `I should be there in ${roundedTime} hours`;
};

module.exports = reachDestination;
