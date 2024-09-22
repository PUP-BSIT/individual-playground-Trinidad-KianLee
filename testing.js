var Animal;
(function (Animal) {
    Animal["MAMMAL"] = "mammals";
    Animal["REPTILE"] = "reptile";
    Animal["AMPHIBIAN"] = "ambphibian";
    Animal["BIRD"] = "bird";
    Animal["FISH"] = "fish";
})(Animal || (Animal = {}));
var cat = {
    animal: Animal.MAMMAL,
    color: "white",
    lifespan: "10 years",
    gender: "f",
    print: function () {
        console.log("I want a ".concat(this.animal, ", that is color\n         ").concat(this.color, ", with a ").concat(this.lifespan, ", and a ").concat(this.gender));
    }
};
var snowyOwl = {
    animal: Animal.BIRD,
    color: "white",
    lifespan: "10-12 years",
    gender: "male",
    print: function () {
        console.log("In my whole life, I have never had a pet that is a ".concat(this.animal, ". ") +
            "If I could have one, I would like to have a snowy owl " +
            "that has a color of ".concat(this.color, " and is a ").concat(this.gender, ". ") +
            "Even when it's old, it would still be white. " +
            "Snowy owls have an incredible lifespan of up to ".concat(this.lifespan, ", ") +
            "which is amazing!");
    },
};
cat.print();
snowyOwl.print();
