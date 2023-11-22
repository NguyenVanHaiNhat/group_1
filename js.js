function feetToMeter(feet){
    return 0.305 * feet;
}

function MeterToFeet(meter){
    return 3.279 * meter;
}

let feet = +prompt("nhập feet");
document.write(feet + " feet " + "= " + feetToMeter(feet) + " meter");
document.write("<br/>");
let meter = +prompt("nhập meter");
document.write(meter + " meter " + "= " + MeterToFeet(meter) + " feet");

