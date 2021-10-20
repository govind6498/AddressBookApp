window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createinnerHtml();
});
const createinnerHtml = () => {
    if (contactList.length == 0) {
        return;
    }
    const headerHtml = `<tr>
        <th>Full Name</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        </tr>
        `;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td>
                <img src="../assets/delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
                    <img src="../assets/edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
                    </td>
                </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};
let contactList = [
    {
        _id: 1,
        _name: "Amit Kumar",
        _phoneNumber: "+91 9768459365",
        _address: "Rajiv Choak",
        _city: "New Delhi",
        _state: "Delhi",
        _zip: "110092",
      },
      {
        _id: 2,
        _name: "Raushan Kumar",
        _phoneNumber: "91 9771082390",
        _address: "Goh",
        _city: "Aurangbad",
        _state: "Bihar",
        _zip: "457684",
      },
      {
        _id: 3,
        _name: "Govind Singh",
        _phoneNumber: "9798364309",
        _address: "Ferozepur",
        _city: "Ferozepur",
        _state: "Punjab",
        _zip: "152004",
      },
];
