abstract class Person1{
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee1 extends Person1 { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(); // must call super()
        
        this.empCode = code;
        this.name = name;
    }
}

let e: Person1 = new Employee1("Devesh", 100);
e.display(); 