

// cria um array com os valore init e end = [0,1,2,3,4,5,6,7,8,9,10]
var range = Rx.Observable.range(1, 10);
var subscription = range.subscribe(
   range => console.log(`My range is ${range}`),
   range => { },
   range => console.log(`complete`)
);

var numbers = [1, 8, 15, 37];
var source = Rx.Observable.from(numbers);
subscription = source.subscribe(value =>
   console.log(`My value is ${value}`));