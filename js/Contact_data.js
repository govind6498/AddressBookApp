class Contact {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        const nameRegex = RegExp("^[A-Z][a-zA-Z]{2,}(\\s{1}[A-Z][a-zA-Z]*)*$");
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw "Name is Invalid";
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp("^([+]?([0-9]{2}\\s{1})?[7-9]{1}[0-9]{9})$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber
        }
        else {
            throw " Phone Number is Invalid"
        }
    }
    get address() {
        return this._address;
    }
    set address(address) {
        const addressRegex = RegExp('^([a-zA-Z0-9-:#$+*,;.]{3,}\\s{0,1})+$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else {
            throw "Address is Invalid";
        }
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
         this._state=state;
    }
    get zip() {
        return this._zip
    }
    set zip(zip) {
        const zipRegex = RegExp("^[0-9]{6}$");
        if (zipRegex.test(zip)) {
            this._zip = zip
        }
        else {
            throw "Zip is Invalid";
        }
    }
    toString() {
        return `id: ${this.id} \nName: ${this._name} \nPhone Number: ${this._phoneNumber} \nAddress: ${this._address} \nCity: ${this._city} \nState: ${this._state} \nZip:  ${this._zip}`;
    }
}