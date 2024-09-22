enum Animal {
    MAMMAL = "mammals",
    REPTILE = "reptile",
    AMPHIBIAN = "ambphibian",
    BIRD = "bird",
    FISH = "fish"
}

type Pets = {
    animal: Animal;
    color: string;
    lifespan: string;
    gender: string; 
    print(): void;
}

const cat: Pets = {
    animal: Animal.MAMMAL,
    color: "white",
    lifespan: "10 years",
    gender: "f",
    print(){
        console.log (`I want a ${this.animal}, that is color
         ${this.color}, with a ${this.lifespan}, and a ${this.gender}`);
    }
};

const snowyOwl: Pets = {
  animal: Animal.BIRD,
  color: "white",
  lifespan: "10-12 years",
  gender: "male",
  print(): function(): void {
    console.log(
      `In my whole life, I have never had a pet that is a ${this.animal}. ` +
        `If I could have one, I would like to have a snowy owl ` +
        `because it has a color of ${this.color} and is a ${this.gender}. ` +
        `Even when it's old, it would still be white. ` +
        `Snowy owls have an incredible lifespan of up to ${this.lifespan}, ` +
        `which is amazing. I can grow old with them.`
    );
  },
};

cat.print();
snowyOwl.print();