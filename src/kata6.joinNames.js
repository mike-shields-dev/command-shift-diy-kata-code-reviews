const joinNames = (namesObj) => {
    // here I'm using the optional index and source array parameters
    const resultsArr = namesObj.reduce((accName, currVal, idx, srcArr) => {
        // if first item in array which starts with space:
        if(accName === ''){
            return accName + currVal.name;
            // else if index is at the last item in array:
        } else if (idx === srcArr.length - 1) {
            return accName + ' & ' + currVal.name;
        }else {
            return accName + ', ' + currVal.name;
        }
    },'');

    // return the result array as a string with String constructor
    return String(resultsArr);
}

module.exports = joinNames;
