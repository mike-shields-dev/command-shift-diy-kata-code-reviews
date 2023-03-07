const reachDestination = (distance, speed) => {
    const time = distance/speed;
    const timeToDestination = Math.ceil(time * 2) / 2;
    return `I should be there in ${timeToDestination} hours.`
};

module.exports = reachDestination;
