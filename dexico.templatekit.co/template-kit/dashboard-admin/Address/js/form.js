const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

$(document).ready(showAddress);
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

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSucces(input);
        }
    });
}

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


function addNewAddress() {

    let city = $('#city').val();
    let district = $('#district').val();
    let ward = $('#ward').val();
    let house_number = $('#house_number').val();
    let newAddress = {
        city: city,
        district: district,
        ward: ward,
        houseNumber: house_number
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newAddress),

        url: "http://localhost:8080/api/address/create",
        success :showAddress
    });


}

function showAddress(e) {
    let content = "";
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/address",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                content += `
                
                <tr>
                    <th scope="row">${data[i].id}</th>
                    <td>${data[i].city}</td>
                    <td>${data[i].district}</td>
                    <td>${data[i].ward}</td>
                    <td>${data[i].houseNumber}</td>
                    <td>${data[i].activated}</td>
                    <td>
<!--                        <a href="update.html" onclick="updateAddress(${data})" type="button" class="btn btn-primary">Update</a>-->
                        <button onclick="updateAddress(${data[i]})" type="submit" class="btn btn-primary">Update</button>
                        <button  onclick="deleteAddress(${data[i].id})" type="submit" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            `
            }
            document.getElementById("tb-address").innerHTML = content;
            console.log(data)
        }

    })
}

function deleteAddress(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/address/${id}`,
        //xử lý khi thành công
        success: showAddress
    });
}
