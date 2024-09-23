//Part 1

const PI = 3.1415;  
const radius = 5;  //Radius of the garden in meters 
const area = PI * radius * radius;  //Area of the circular garden
const minSpacePerPlant = 0.8; // Space required per plant
const maxPlants = Math.floor(area / minSpacePerPlant); // Max plant capacity
let initialPlants = 20; // Starting plant count

function plantGrowth(weeks) {
    let plantCount = initialPlants * Math.pow(2, weeks); // Plants after specified weeks
    
    console.log(`After ${weeks} weeks, the plant count will be: ${plantCount}`);

    if (plantCount > maxPlants * 0.8) {
        console.log("Recommendation: Prune the plants.");
    } else if (plantCount >= maxPlants * 0.5) {
        console.log("Recommendation: Monitor the plants.");
    } else {
        console.log("Recommendation: You can plant more plants.");
    }
}

// Testing for 1, 2, and 3 weeks
for (let i = 1; i <= 3; i++) {
    plantGrowth(i);
}

//Part 2

function expandedGarden(weeks) {
    let startingPlants = 100;
    let plantCount = startingPlants * Math.pow(2, weeks); // Plant growth after weeks

    let requiredSpace = plantCount * minSpacePerPlant; // Total space needed
    let additionalSpace = requiredSpace - area; // Extra space needed if > original area

    console.log(`After ${weeks} weeks with 100 starting plants, the total space required is: ${requiredSpace} square meters`);
    
    if (additionalSpace > 0) {
        console.log(`Additional space required: ${additionalSpace} square meters`);
    } else {
        console.log("No additional space required.");
    }

    // Calculate new radius for the expanded garden
    let newRadius = Math.sqrt(requiredSpace / PI);
    console.log(`The new radius for the expanded garden would be: ${newRadius} meters`);
}

// Call for 10 weeks
expandedGarden(10);


//Part 3

try {
    const startingPlants = 100;
    const plantCount = startingPlants * Math.pow(2, 10); // Plants after 10 weeks
    const requiredSpace = plantCount * minSpacePerPlant;

    if (requiredSpace > area) {
        throw new Error("The required space exceeds the available space in the garden.");
    }

    console.log(`After 10 weeks, the space required for 100 plants is: ${requiredSpace} square meters.`);
} catch (error) {
    console.error(error.message);
}
