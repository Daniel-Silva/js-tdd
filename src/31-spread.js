//Conhecendo o spread operator
let front = [ 'react', 'vue', 'angular' ];
let back = [ 'python', 'ruby', 'nodejs' ];

console.log(...front, ...back);

let fullStack = [ ...front, 'RxJS', ...back ];

console.log(fullStack);
