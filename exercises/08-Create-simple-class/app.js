class Counter{
	constructor(){
        //initialization of the counter variable
        this.suma = 0;
		
	}
	increaseOne(){
        //increase the value in one
        return this.suma++;
	}
	decreaseOne(){
        //decrease the value in one
         return this.suma--;
	}
	getValue(){
        //return the value
         return this.suma;
	}	
}

let myNewCounter = new Counter();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.increaseOne();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.decreaseOne();
myNewCounter.decreaseOne();
console.log(myNewCounter.getValue());

