const reachDestination = (distance, speed) => {
  let time;
  if (typeof distance === "number" && typeof speed === "number") {
    time = Math.round((distance / speed) * 2) / 2;
  }
  return `I should be there in ${time} hours`;
};

module.exports = reachDestination;
