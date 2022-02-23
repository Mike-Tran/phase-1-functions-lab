const manhattanBlock = 264;
const scuberHeadquarters = 42;


function distanceFromHqInBlocks(location) {
	return Math.abs(scuberHeadquarters - location);
}

function distanceFromHqInFeet(location) {
	return distanceFromHqInBlocks(location) * manhattanBlock;
}

function distanceTravelledInFeet(loc1, loc2) {
	return Math.abs((loc2 - loc1) * manhattanBlock);
}

function calculatesFarePrice(start, destination) {
	const travelDistance = distanceTravelledInFeet(start, destination);
	const flatFare = 25;	// 2000ft - 2500ft flate fare
	const perFoot = .02;	// 400 - 2000 per foot cost

	if (travelDistance > 2500) {
		return 'cannot travel that far';
	} else if (travelDistance > 2000) {
		return 25;
	} else if (travelDistance > 400) {
		return (travelDistance - 400) * .02;
	} else {	// first 400 ft free ride
		return 0;
	}
}
