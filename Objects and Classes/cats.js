function cats(data) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let cat of data) {
        let [name, age] = cat.split(' ');
        let tempCat = new Cat(name, age)
        tempCat.meow()
    }
}
cats(['Mellow 2', 'Tom 5']);
console.log("------------")
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);