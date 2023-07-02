const joinNames = (namesObj) => {
  const lastValue = namesObj[namesObj.length - 1].name;
  const otherValues = namesObj
    .slice(0, namesObj.length - 1)
    .map((person) => person.name);
  return `${otherValues.join(", ")} & ${lastValue}`;
};

module.exports = joinNames;
