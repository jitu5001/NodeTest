class Person {
    constructor(name, age){
        this.Name = name;
        this.Age = age;
    }
    Greetings(){
        console.log('Hello my name is '+ this.Name + ' and my age is ' + this.Age) ;
    }  

}
module.exports = Person;