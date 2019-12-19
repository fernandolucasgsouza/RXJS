var observable = Rx.Observable.create(observer => {
   let i = 0;
   let interval = setInterval(() => {
      observer.next(i++);
      if (i > 5) {
         observer.complete();
         subscription.unsubscribe();
         clearInterval(interval);
      }
      console.log('i', i);
   }, 1000);
   // observer.error('error cod 131');
});

var subscription = observable.subscribe(
   value => console.log(`My value is ${value}`),
   err => console.log(`Error message: ${err}`),
   () => console.log(`Completed`)
);