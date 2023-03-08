const joinNames = (namesObj) => {
//if the array is empty, returns an empty string
    if (namesObj.length === 0){
        return ''
    }

//if the array has 1 name, returns that name only
    if (namesObj.length === 1){
        return namesObj[0].name;
    }


//if the array has more than 1 name, need to apply given rules
    const lastNameInArray = namesObj.pop().name;
    const stringOfNames = namesObj.map(({name}) => name).join(', ');

if(namesObj.length > 1){
    return `${stringOfNames} & ${lastNameInArray}`;
}
};

module.exports = joinNames;
