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
// form.addEventListener('submit',function(e) {
//     e.preventDefault();
//
//     checkRequired([username, email, password, password2]);
//     checkLength(username,3,15);
//     checkLength(password,6,25);
//     checkEmail(email);
//     checkPasswordMatch(password, password2);
// });
$(document).ready(showBuilding);

function showBuilding() {
    let contentBuilding = "";
    $.ajax({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        type: "GET",
        url: "http://localhost:8080/api/buildings",
        success: function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                contentBuilding += `

                <tr>
                <th scope="row">${data[i].id}</th>
                    <td>${data[i].buildingName}</td>
                    <td>${data[i].address.city}</td>
                    <td>${data[i].address.district}</td>
                    <td>${data[i].address.ward}</td>
                    <td>${data[i].address.houseNumber}</td>
                    <td>${data[i].landlord.fullName}</td>
                    <td>${data[i].activated}</td>
                   
                    <td>

                        <a href="update.html" class="btn btn-primary">Update</a>
                        <button type="button" onclick="deleteBuilding(${data[i].id})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>`
            }
            document.getElementById("showBuilding").innerHTML = contentBuilding;

        }
        // console.log(data)
        // }
    })
}

function addBuilding() {
    let buildingName = $('#building_name').val();
    let city = $('#city').val();
    let district = $('#district').val();
    let ward = $('#ward').val();
    let houseNumber = $('#houseNumber').val();
    let landlordId = $('#landlord_id').val();
    let newBuilding = {
        buildingName: buildingName,
        city: city,
        district: district,
        ward: ward,
        houseNumber: houseNumber,
        landlordId: landlordId
    };
    console.log(newBuilding)

    $.ajax({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newBuilding),
        url: "http://localhost:8080/api/buildings/create",
        success: function () {
            alert("Building successfully created!");
            window.location.href="http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/Building/index.html";
        },
        error: function () {
            alert("failed to create building!");
            window.location.href="http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/Building/index.html";
        }
    })
}
function deleteBuilding(id) {
    $.ajax({
        type: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        url: `http://localhost:8080/api/buildings/${id}`,
        success: function () {
            alert("Xóa thành công");
            window.location.href = "http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/Building/index.html"
        }
    });
}