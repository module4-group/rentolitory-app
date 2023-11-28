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
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
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

function showLandlordList() {
    let contentLandLord = "";
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/landlords",
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.content.length; i++) {
                contentLandLord += `
                <tr>
                    <th scope="row">${data.content[i].id}</th>
                    <td>${data.content[i].fullName}</td>
                    <td>${data.content[i].username}</td>
                    <td>${data.content[i].email}</td>
                    <td>${data.content[i].address}</td>
                    <td>${data.content[i].phoneNumber}</td>
                    <td>${data.content[i].avatar}</td>
                    <td>${data.content[i].activated}</td>
                    <td>
                        <a type="button" class="btn btn-primary" href="update.html?id=${data.content[i].id}" >Update</a>
                        <button onclick="deleteLandlord(${data.content[i].id})" type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
           `
            }

            document.getElementById("showLandlord").innerHTML = contentLandLord;
        }
    })
}

function addLandlord(event){
    let fullName = $("#fullName").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let address = $("#address").val();
    let email = $("#email").val();
    let phoneNumber = $("#phone_number").val();
    let avatar = $("#avatar").val();

    let registerData = {
        fullName: fullName,
        username: username,
        password: password,
        email: email,
        address:address,
        phoneNumber: phoneNumber,
        avatar: avatar,
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/landlords/register",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(registerData),
        success: function (response) {
            console.log("Đăng ký thành công:", response);
            let confirmation = confirm("Đăng ký thành công! trở về trang đăng nhập.");
            if (confirmation) {
                location.href = "dexico.templatekit.co/template-kit/login-register/login.html"
            }
        },
        error: function (xhr) {
            if (xhr.status >= 400 && xhr.status < 500) {
                alert("đăng nhập không hợp lệ");
            } else if (xhr.status >= 500) {
                alert("Lỗi server");
            }
        }
    });
    // event.preventDefault();

}

function deleteLandlord(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/landlords/${id}`,
        //xử lý khi thành công
        success: function (){
            alert("Xóa thành công");
            window.location.href="http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/Landlord/index.html"
        }
    });
}

function updateLandlord(id){
    let fullName = $("#fullName").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let address = $("#address").val();
    let email = $("#email").val();
    let phoneNumber = $("#phoneNumber").val();
    let avatar = $("#avatar").val();

    let updateData = {
        fullName: fullName,
        username: username,
        password: password,
        email: email,
        address:address,
        phoneNumber: phoneNumber,
        avatar: avatar,
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(updateData),
        url: `http://localhost:8080/api/landlords/${id}`,
        success: function (){
            alert("Cập nhật thành công ")
            window.location.href="http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/Landlord/index.html"
        }
    })
}

$(document).ready(showLandlordList);