const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input)
    } else {
        showError(input, 'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    } else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


//Event Listeners
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     checkRequired([username, email, password, password2]);
//     checkLength(username, 3, 15);
//     checkLength(password, 6, 25);
//     checkEmail(email);
//     checkPasswordMatch(password, password2);
// });

$(document).ready(showApartmentList);

function addApartment() {
    let name = $('#name').val();
    let roomNumber = $('#room_number').val();
    let area = $('#area').val();
    let numberOfBedroom = $('#number_of_bedroom').val();
    let numberOfRoom = $('#number_of_room').val();
    let monthlyRent = $('#monthly_rent').val();
    let maxTenants = $('#max_tenant').val();
    let buildingId = $('#building').val();
    let newApartment = {
        name: name,
        roomNumber: roomNumber,
        area: area,
        numberOfBedroom: numberOfBedroom,
        numberOfRoom: numberOfRoom,
        monthlyRent: monthlyRent,
        maxTenants: maxTenants,
        buildingId: buildingId
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newApartment),
        url: "http://localhost:8080/api/apartments/add",
        success: showApartmentList
    })
}

function showApartmentList() {
    let contentApartment = "";
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments",
        success: function (data) {
            for (let i = 0; i < data.content.length; i++) {
                if (data.content[i].activated == true) {
                    contentApartment += `
                    
                <tr>
                <th scope="row">${data.content[i].id}</th>
                    <td>${data.content[i].name}</td>
                    <td>${data.content[i].roomNumber}</td>
                    <td>${data.content[i].area}</td>
                    <td>${data.content[i].numberOfBedroom}</td>
                    <td>${data.content[i].monthlyRent}</td>
                    <td>${data.content[i].maxTenants}</td>
                    <td>${data.content[i].building.buildingName}</td>
                    <td>${data.content[i].activated}</td>
                    <td>
                         
                        <a href="update.html?id=${data.content[i].id}" class="btn btn-primary">Update</a> 
                        <button type="button" onclick="deleteApartment(${data.content[i].id})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>`
                }
                document.getElementById("showApartmentList").innerHTML = contentApartment;

            }
            // console.log(data)
        }
    })
}



function deleteApartment(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/apartments/${id}`,
        //xử lý khi thành công
        success: addApartment
    });
}

function updateApartment(id) {

    let name = $('#name').val();
    let roomNumber = $('#room_number').val();
    let area = $('#area').val();
    let numberOfBedroom = $('#number_of_bedroom').val();
    let numberOfRoom = $('#number_of_room').val();
    let monthlyRent = $('#monthly_rent').val();
    let maxTenants = $('#max_tenant').val();
    let buildingId = $('#building').val();
    let updateApartment = {
        name: name,
        roomNumber: roomNumber,
        area: area,
        numberOfBedroom: numberOfBedroom,
        numberOfRoom: numberOfRoom,
        monthlyRent: monthlyRent,
        maxTenants: maxTenants,
        buildingId: buildingId
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(updateApartment),
        url: `http://localhost:8080/api/apartments/${id}`,
        success: showApartmentList
    })
}