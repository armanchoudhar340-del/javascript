class Car{
    // properties/variables
    // function/method
    static model;

    constructor(bike) {
        this.bike = bike;
        this.model = model;
    }

    honk (){
        console.log('honk....');
    }

    static break() {
        console.log('applying break...., bike')
    }
}
    
let obj = new Car();
obj.honk();

Car.break('M1000RR');

class BMW extends Car{
    constructor(model, color) {
        this.color = color;
        super(model);
 
    }
    selectColor(color) {
        console.log(color, "car is ", this.honk());
    
    }
}


let car1 = new BMW('b420');
car1.selectColor('black');
