
function login(e) {

        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/login",
            contentType: "application/json",
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: function (response) {
                alert(response.message);
                localStorage.setItem('authToken', response.token);
                if (response.admin===true){
                    location.href = "http://localhost:63343/rentalitory-app/dexico.templatekit.co/template-kit/dashboard-admin/home-admin/home/index.html";
                }
                else {
                    location.href = "http://localhost:63343/rentalitory-app/dexico.templatekit.co/index.html?_ijt=3qg54m16mvqa9m61pge3edih75&_ij_reload=RELOAD_ON_SAVE";
                }
            },
            error: function (xhr) {
                if (xhr.status >= 400 && xhr.status < 500) {
                    alert("đăng nhập không hợp lệ");
                } else if (xhr.status >= 500) {
                    alert("Lỗi server");
                }
            }
        })
    }


