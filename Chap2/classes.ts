class NewPerson {
    constructor(private msg: string) {}
    
    speak() {
        this.msg = "speak" + this.msg;
        console.log(this.msg);
    }
}

const tom = new NewPerson("hello");
tom.speak();