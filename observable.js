
let service = {};
let subscription;

let observable = Rx.Observable.create(observer => {
   let i = 0;
   let interval = setInterval(() => {
      observer.next(parseInt(Math.random() * 10));
      i++;
      if (i > 5) {
         observer.complete();
         if (!!subscription) subscription.unsubscribe();
         clearInterval(interval);
      }
      console.log('i', i);
   }, 1000);
   // observer.error('error cod 131');
});

// subscription = observable.subscribe(
//    value => console.log(`My value is ${value}`),
//    err => console.log(`Error message: ${err}`),
//    () => console.log(`Completed`)
// );

service = observable;

