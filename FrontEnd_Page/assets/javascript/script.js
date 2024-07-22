// Chuyển từ trang index sang trang login

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const topNav = document.getElementById('auth-link');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn form gửi dữ liệu để test
            // Giả sử đăng nhập thành công
            window.location.href = 'index.html'; // Chuyển hướng đến trang chủ
            sessionStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
        });
    }

    if (topNav) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            topNav.innerHTML = `
                    Log Out
            `;

            const authLink = document.getElementById('auth-link');
            authLink.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn liên kết mặc định
                sessionStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
                window.location.href = 'SignIn.html'; // Chuyển hướng đến trang đăng nhập
            });
        } else {
            topNav.innerHTML = `
                Sign In
            `;
        }
    }
});


// chuyển từ cart sang checkout

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("checkout-button").addEventListener("click", function() {
        window.location.href = "checkOut.html";
    });
})


// Khi nhấn vào Confirm trong Cart xác nhận đặt hàng thành công
document.addEventListener('DOMContentLoaded', function() {
    // Get the popup and button
    var popup = document.getElementById("orderPopup");
    var btn = document.getElementById("confirmBtn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup
    btn.addEventListener('click', function() {
        popup.style.display = "block";
    });

    // When the user clicks on <span> (x), close the popup
    span.addEventListener('click', function() {
        popup.style.display = "none";
    });

    // When the user clicks anywhere outside of the popup, close it
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

