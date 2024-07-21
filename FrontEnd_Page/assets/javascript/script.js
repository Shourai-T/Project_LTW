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
