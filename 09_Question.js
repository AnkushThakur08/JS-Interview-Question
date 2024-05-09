// Captlise 1st letter of the string
function capitalizeFirstLetter(arr) {
    return arr.map(str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
}

// Example usage:
const stringsArray = ["hello world", "ankush", "pw good company"];
const capitalizedArray = capitalizeFirstLetter(stringsArray);
console.log(capitalizedArray);
// Output: ["Hello World", "Ankush", "Pw Good Company"]
