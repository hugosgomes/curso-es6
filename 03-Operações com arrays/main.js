const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item + index;
})

const sum = arr.reduce((total, next) => {
    return total + next;
})

const filter = arr.filter(function name(item) {
    return item % 2 === 0;
})

const find = arr.find(function name(item) {
    return item === 4;
})

console.log(newArr);
console.log(sum);
console.log(filter);
console.log(find);