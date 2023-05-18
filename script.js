const hatchMonList = ["Alolan-Geodude", "Snivy", "Gothita", "Froakie", "Rowlet", "Popplio", "Scorbunny", "Dreepy"]

const eggChance = (babyNum, losses) => {
    let percent = 25;
    let chance

    if (babyNum <= 3) {
        chance = 0;
    }
    if (babyNum >= 3 && babyNum < 5) {
        chance = percent * losses;
    }
    if (babyNum >= 5) {
        chance = percent * 2 * losses;
    }
    return chance;
};

const layEgg = (babyNum, losses) => {
    const chance = eggChance(babyNum, losses);
    const rng = Math.floor(Math.random() * 100);

    console.log("rng", rng)
    console.log("chance", chance)

    if (chance >= rng) {

        console.log("Congratulations you got an egg")

        const pokemon = hatchMonList[Math.floor(Math.random() * Math.floor(hatchMonList.length))];
        return pokemon;
    }
    else {
        console.log("You did not get an egg")

        return null;
    }
}

console.log(layEgg(1, 1))
console.log(layEgg(2, 2))
console.log(layEgg(3, 1))
console.log(layEgg(3, 2))
console.log(layEgg(4, 3))
console.log(layEgg(4, 4))
console.log(layEgg(4, 0))
console.log(layEgg(4, 1))
console.log(layEgg(5, 0))
console.log(layEgg(5, 1))
console.log(layEgg(5, 2))
