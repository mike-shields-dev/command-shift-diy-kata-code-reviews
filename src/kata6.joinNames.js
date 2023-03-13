const joinNames = (namesObj) => {
  const nameString = namesObj.map((object) => String(object.name));
  return `${nameString.slice(0, -1).join(", ")} & ${nameString.slice(-1)}`;
};

module.exports = joinNames;
