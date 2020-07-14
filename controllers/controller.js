"use strict";
var userCar;
function createCar() {
    var acumerror = 0;
    var plate = document.getElementById("plate").value;
    var brand = document.getElementById("brand").value;
    var color = document.getElementById("color").value;
    userCar = new Car(plate, color, brand);
    document.getElementById("car").innerHTML = "Coche: ";
    document.getElementById("infoPlate").innerHTML = "<strong>Matricula: </strong>" + userCar.plate;
    document.getElementById("infoBrand").innerHTML = "<strong>Marca: </strong>" + userCar.brand;
    document.getElementById("infoColor").innerHTML = "<strong>Color: </strong>" + userCar.color;
}
function addWheels() {
    var error = 0;
    for (var i = 1; i < 5; i++) {
        var diameter = parseFloat(document.getElementById("dRueda" + i).value);
        if (diameter < 0.4 && diameter > 2) {
            alert("El diamertro de la rueda " + i + " tiene que ser mas que 0.4 y menos que 2.");
            error++;
        }
    }
    if (error == 0) {
        for (var i = 1; i < 5; i++) {
            var diameter = parseFloat(document.getElementById("dRueda" + i).value);
            var brand = document.getElementById("mRueda" + i).value;
            userCar.addWheel(new Wheel(diameter, brand));
        }
        document.getElementById("wheel").innerHTML = "Ruedas: ";
        document.getElementById("infoWheel1").innerHTML = "<strong>Rueda 1 :<br> Marca:</strong> " + userCar.wheels[0].brand + "<br><strong> Diametro:</strong> " + userCar.wheels[0].diameter;
        document.getElementById("infoWheel2").innerHTML = "<strong>Rueda 2 :<br> Marca:</strong> " + userCar.wheels[1].brand + "<br><strong> Diametro:</strong> " + userCar.wheels[1].diameter;
        document.getElementById("infoWheel3").innerHTML = "<strong>Rueda 3 :<br> Marca:</strong> " + userCar.wheels[2].brand + "<br><strong> Diametro:</strong> " + userCar.wheels[2].diameter;
        document.getElementById("infoWheel4").innerHTML = "<strong>Rueda 4 :<br> Marca:</strong> " + userCar.wheels[3].brand + "<br><strong> Diametro:</strong> " + userCar.wheels[3].diameter;
    }
}
