// Code your solution in this file!

function distanceFromHqInBlocks(destBlocks, startBlocks=42){
    return Math.abs(destBlocks - startBlocks);
}

function distanceFromHqInFeet(destBlocks, startBlocks){
    return distanceFromHqInBlocks(destBlocks, startBlocks)*264;
}

function distanceTravelledInFeet(destBlocks, startBlocks) {
    return distanceFromHqInFeet(destBlocks, startBlocks);
}

function calculatesFarePrice(startBlock, destinationBlock) {
    //returns the fare for the customer
    let distanceFt = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distanceFt <= 400){
        return 0;
    }
    else if (distanceFt > 400 && distanceFt <=2000){
        return (distanceFt-400)*0.02;
    }
    else if (distanceFt > 2000 && distanceFt <2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
  }