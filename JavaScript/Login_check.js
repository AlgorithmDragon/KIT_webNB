function checkLogin() {
    const Logged_Check = localStorage.getItem('로그인 여부');

    if (Logged_Check == 1) {
        return 1;
    }
    else {
        return 0;
    }
}
function handleProfileClick() {
    // 여기에 프로필을 클릭했을 때 실행될 동작을 구현
    console.log("프로필이 클릭되었습니다.");

    // 프로필을 클릭했을 때 동적으로 스타일 변경
    const profileContent = document.getElementById('wrapper');
    if (profileContent.style.display === 'none') {
        profileContent.style.display = 'block';
    } else {
        profileContent.style.display = 'none';
    }
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function () {
    const loginListItem = document.querySelector('li:nth-child(2)');
    const loginListItem2 = document.querySelector('li:nth-child(3)');
    var currentPageURL = window.location.href;

    if (checkLogin() === 1) {
 
        document.querySelector('li:nth-child(2)').textContent = '프로필';
        document.querySelector('li:nth-child(3)').textContent = '로그아웃'; 
    }
    if (checkLogin() === 0) {
   
        document.querySelector('li:nth-child(2)').textContent = '로그인';
    }

    // 경로에 따라 하이퍼링크 경로 다르게 로드 되도록 실행.
    loginListItem.addEventListener("click", function () {
        if (checkLogin() === 1) {
            // 프로필 (임시로 현재 main으로 해놓음)
            handleProfileClick();
        } 
        if (checkLogin() === 0) {
           
            if (currentPageURL.includes("main.html")) {
                location.href = "./Login.html";
            }
            else {
                location.href = "/Login.html";
            }
        }
    });

    // 로컬스토리지에 로그인 여부 키 삭제 및 페이지 새로고침
    loginListItem2.addEventListener("click", function () {
        localStorage.removeItem('로그인 여부');
        alert("로그아웃 되었습니다.");
        location.reload(true);
    });

    // 버튼에 갖다댈시 포인터 모양 바뀌게 설정.
    loginListItem.addEventListener("mouseover", function () {
        loginListItem.style.cursor = "pointer";
    });

    loginListItem.addEventListener("mouseout", function () {
        loginListItem.style.cursor = "default";
    });

    loginListItem2.addEventListener("mouseover", function () {
        loginListItem2.style.cursor = "pointer";
    });

    loginListItem2.addEventListener("mouseout", function () {
        loginListItem2.style.cursor = "default";
    });
});

