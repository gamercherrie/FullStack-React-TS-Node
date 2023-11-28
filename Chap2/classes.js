var NewPerson = /** @class */ (function () {
    function NewPerson(msg) {
        this.msg = msg;
    }
    NewPerson.prototype.speak = function () {
        this.msg = "speak" + this.msg;
        console.log(this.msg);
    };
    return NewPerson;
}());
var tom = new NewPerson("hello");
tom.speak();
