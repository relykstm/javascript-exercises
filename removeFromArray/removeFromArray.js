const removeFromArray = function (...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((input) => {
        if (!args.includes(input)) {
            newArray.push(input);
        }
    });
    return newArray;
};

module.exports = removeFromArray