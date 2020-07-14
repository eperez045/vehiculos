let userCar: Car;

function createCar() {
    let acumerror=0;
    let plate = (<HTMLInputElement>document.getElementById("plate")).value;
    let brand = (<HTMLInputElement>document.getElementById("brand")).value;
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    
    userCar = new Car(plate, color, brand);

        (<HTMLInputElement>document.getElementById("car")).innerHTML = "Coche: ";
        (<HTMLInputElement>document.getElementById("infoPlate")).innerHTML ="<strong>Matricula: </strong>"+ userCar.plate;
        (<HTMLInputElement>document.getElementById("infoBrand")).innerHTML ="<strong>Marca: </strong>"+ userCar.brand;
        (<HTMLInputElement>document.getElementById("infoColor")).innerHTML ="<strong>Color: </strong>"+ userCar.color;
}
function addWheels(){
    let error = 0;

    for (let i = 1; i < 5; i++) {
        let diameter = parseFloat((<HTMLInputElement>document.getElementById("dRueda" + i)).value);
        if (diameter < 0.4 && diameter > 2) {
            alert("El diamertro de la rueda " + i + " tiene que ser mas que 0.4 y menos que 2." );
            error++;
        }
    }

    if (error == 0) {
        for (let i = 1; i < 5; i++) {
            let diameter = parseFloat((<HTMLInputElement>document.getElementById("dRueda" + i)).value);
            let brand = (<HTMLInputElement>document.getElementById("mRueda" + i)).value;
            userCar.addWheel(new Wheel(diameter, brand));
        }
        (<HTMLInputElement>document.getElementById("wheel")).innerHTML = "Ruedas: ";

        (<HTMLInputElement>document.getElementById("infoWheel1")).innerHTML ="<strong>Rueda 1 :<br> Marca:</strong> " +userCar.wheels[0].brand +"<br><strong> Diametro:</strong> " +userCar.wheels[0].diameter;
      
        (<HTMLInputElement>document.getElementById("infoWheel2")).innerHTML ="<strong>Rueda 2 :<br> Marca:</strong> " +userCar.wheels[1].brand +"<br><strong> Diametro:</strong> " +userCar.wheels[1].diameter;
      
        (<HTMLInputElement>document.getElementById("infoWheel3")).innerHTML ="<strong>Rueda 3 :<br> Marca:</strong> " +userCar.wheels[2].brand +"<br><strong> Diametro:</strong> " +userCar.wheels[2].diameter;
      
        (<HTMLInputElement>document.getElementById("infoWheel4")).innerHTML ="<strong>Rueda 4 :<br> Marca:</strong> " +userCar.wheels[3].brand +"<br><strong> Diametro:</strong> " +userCar.wheels[3].diameter;
    }
}




