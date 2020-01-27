

let subject = new Rx.Subject();
let subscription = subject.subscribe(
   value => console.log(`My value is ${value}`),
   err => console.log(`Error message: ${err}`),
   () => console.log(`Completed!`)
);
subject.next(55);
subject.next(34);
subject.complete();
