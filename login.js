

document
    .getElementById("userForm")
    .addEventListener("submit", function (e) {
        e.preventDefault()
        const ID = document.getElementById("userId").value;
        const PW = document.getElementById("password").value;
        let textID = "dale12345";
        let textPW = "dale123";
        // 아이디가 비어있을 경우 
        if (!ID) {
            alert("아이디를 입력해주세요.");
            e.preventDefault();
            return; 
        }
        // 비밀번호가 비어있을 경우
        if (!PW) {
            alert("비밀번호를 입력해주세요.");
            return; 
        }
        
        if (textID == ID && textPW == PW)
        {
            location.href = "./Main.html";
        }
        else 
        {
            alert("아이디 혹은 비밀번호를 잘못 입력하셨습니다.");
            return;
        }
    })
