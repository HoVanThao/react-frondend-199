let arr = [1, 2, 3];

arr = [0, ...arr];

console.log(arr);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log(myUpdatedVehicle);

