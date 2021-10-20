let isUpdate = false;
let contactObject = {};
window.addEventListener("DOMContentLoaded", (event) => {
    validateName();
    validatePhoneNumber();
    validateAddress();
    validateZipcode();

});
const validateName = () => {
    const name = document.querySelector("#name");
    name.addEventListener("input", function () {
        if (name.value.length == 0) {
            setTextValue(".name-error", "");
            return;
        }
        try {
            new Contact().name = name.value;
            setTextValue(".name-error", "");
        }
        catch (error) {
            setTextValue(".name-error", error)
        }
    });
};
const validatePhoneNumber = () => {
    const phoneNumber = document.querySelector("#phoneNumber");
    phoneNumber.addEventListener("input", function () {
        if (phoneNumber.value.length == 0) {
            setTextValue(".tel-error", "");
            return;
        }
        try {
            new Contact().phoneNumber = phoneNumber.value;
            setTextValue(".tel-error", "");
        }
        catch (error) {
            setTextValue(".tel-error", error)
        }
    });
};
const validateAddress = () => {
    const address = document.querySelector("#address");
    address.addEventListener("input", function () {
        if (address.value.length == 0) {
            setTextValue(".address-error", "");
            return;
        }
        try {
            new Contact().address = address.value;
            setTextValue(".address-error", "");
        }
        catch (error) {
            setTextValue(".address-error", error)
        }
    });
};
const validateZipcode = () => {
    const zip = document.querySelector("#zip");
    zip.addEventListener("input", function () {
        if (zip.value.length == 0) {
            setTextValue(".zip-error", "");
            return;
        }
        try {
            new Contact().zip = zip.value;
            setTextValue(".zip-error", "");
        }
        catch (error) {
            setTextValue(".zip-error", error)
        }
    });
};
function save(event) {

    event.preventDefault();
    event.stopPropagation();

    setContactObject();
    createAndUpdateStorage();
    resetForm();
}
function createAndUpdateStorage() {
    let AddressBookList = getListFromStorage('AddressBookList');
    if (AddressBookList != undefined) {
        let addressBookData = AddressBookList
            .find(contact => contact.id == contactObject.id);
        if (!addressBookData) AddressBookList.push(contactObject);
        else {
            const index = AddressBookList
                .map(contact => contact.id)
                .indexOf(addressBookData.id);
            AddressBookList.splice(index, 1, contactObject);
        }
    } else {
        AddressBookList = [contactObject];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(AddressBookList));
}

function setContactObject() {
    contactObject = new Contact();
    try {
        if (!isUpdate) {
            contactObject.id = createNewContactID();
        }
        contactObject.name = getInputValueId('#name');
        contactObject.phoneNumber = getInputValueId('#phoneNumber');
        contactObject.address = getInputValueId('#address');
        contactObject.city = getInputValueId('#city');
        contactObject.state = getInputValueId('#state');
        contactObject.zip = getInputValueId('#zip');
        alert(contactObject);
    } catch (e) {
        throw e;
    }
}

function createNewContactID() {
    let contactID = getListFromStorage('AddressBookList').length;
    contactID++;
    return contactID;
}
const resetForm = () => {
    setValue("#name", "");
    setValue("#phoneNumber", "")
    setValue("#address", "");
    setSelectedIndex("#city", 0);
    setSelectedIndex("#state", 0);
    setValue("#zip", "");
    setTextValue(".name-error", "");
    setTextValue(".tel-error", "");
    setTextValue(".address-error", "");
    setTextValue(".zip-error", "");
};
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};
const setTextValue = (id, value) => {
    const element = document.querySelector(id)
    element.textContent = value;
};

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.setSelectedIndex = index;
};

const getInputValueId = (property) => {
    let value = document.querySelector(property).value
    return value;
};
const getListFromStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}