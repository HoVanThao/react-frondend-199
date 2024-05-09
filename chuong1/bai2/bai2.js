class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    getAddress() {
        return 'I line in' + this.address;
    }


}

const test = new Person('thao', 'gia lai');

console.log('>>> check address: ', test.getAddress());