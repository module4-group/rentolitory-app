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

$(document).ready(showUser);
function showUser(){
    let content = "";
    return $.ajax({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        type:"GET",
        url:"http://localhost:8080/api/user",
        success: function (data){
            for (let i = 0; i < data.length; i++) {
                content += `
                <tr>
                    <th scope="row">${data[i].id}</th>
                    <td>${data[i].fullName}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phoneNumber}</td>
                    <td>${data[i].avatar}</td>
                    <td>${data[i].activated}</td>
                    <td>
                        <a type="button" class="btn btn-primary" href="update.html" >Update</a>
                        <button onclick="deleteUser(${data[i].id})" type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                `
            }
            document.getElementById("showUser").innerHTML = content;
        }
    })
}
function deleteUser(id) {
    $.ajax({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        type: "DELETE",
        //tên API
        url: `http://localhost:8080/api/user/${id}`,
        //xử lý khi thành công
        success: showUser
    });
}
//b1: lấy building id
// b2: viết function lấy đầu getAPI của building bằng return $.ajax