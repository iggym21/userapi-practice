async function addRow(){
    const rawuserdata = await fetch ("https://randomuser.me/api/");
    const userdata = await rawuserdata.json();

    let name = `${userdata.results[0].name.first} ${userdata.results[0].name.last}`;
    let email = userdata.results[0].email;
    let phone = userdata.results[0].phone;
    let address = `${userdata.results[0].location.street.number}, ${userdata.results[0].location.street.name}, ${userdata.results[0].location.city}, ${userdata.results[0].location.state}, ${userdata.results[0].location.country}, ${userdata.results[0].location.postcode}`;
    
    const table = document.getElementById("userDataTable");
    const row = document.createElement("tr");
    
    const nameColumn = document.createElement("td");
    nameColumn.textContent = name;

    const emailColumn = document.createElement("td");
    emailColumn.textContent = email;

    const phoneColumn = document.createElement("td");
    phoneColumn.textContent = phone;
    
    const addressColumn = document.createElement("td");
    addressColumn.textContent = address;

    row.appendChild(nameColumn);
    row.appendChild(emailColumn);
    row.appendChild(phoneColumn);
    row.appendChild(addressColumn);

    table.appendChild(row);

}

addRow();