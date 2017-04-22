// forEach
quiz.forEach(function(value, index) {
    console.log(value + index);
});

// map
var mr = [1, 2, 3].map(function(n) {
    return n*2;
});
console.log(mr);

// reduce
var rr = mr.reduce(function(prev, current) {
    return prev + current;
});
console.log(rr);

// combine map and reduce
var mrr = [1, 2, 3].map(function(n) { return n*2; }).reduce(function(prev, current) { return prev + current; });
console.log(mrr);

// filter
var af = [1, 2, 3, 4, 5].filter(function(number) {
    return number%2 === 0; // return true if the number is even
});
console.log(af);
