//checks the speed and calculate if speed has passed the limit and assigns demerit points.
function speedDetector(speed) {
const  speedlimit = 70;
const demeritpoint =1;

if (speed <speedlimit) {
    alert("Ok");
    
}else {
    const excessspeed = speed -speedlimit;
    const demerit = Math.floor(excessspeed + demeritpoint);
    alert(`Total demerit points: ${demerit}`);
}
    
}

// prompts the user for the speed limit, converts it and validates it.
function main(){
    const input = prompt("Enter speed of the car (km/h)");
    const speed = parseFloat(input);

    if (!isNaN(speed) && speed >= 0) {
        speedDetector(speed);
        
    }else {
        alert("Plese input a valid speed");
    }
}

main();