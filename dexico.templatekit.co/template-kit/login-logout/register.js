function register(event) {
    let fullName = $("#fullName").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let email = $("#email").val();
    let phoneNumber = $("#phoneNumber").val();
    let avatar = $("#avatar").val();

    let registerData = {
        fullName: fullName,
        username: username,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        avatar: avatar,
    };
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/users/register",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(registerData),
        success: function (response) {
            console.log("Đăng ký thành công:", response);
            let confirmation = confirm("Đăng ký thành công! trở về trang đăng nhập.");
            if (confirmation) {
                location.href = "login.html"
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
    event.preventDefault();

}
