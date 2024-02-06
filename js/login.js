(function () {
  const user = {
    id: 0,
    username: "test",
    password: "test123123",
  };

  const formEl = document.querySelector("form");

  const loginHandler = (e) => {
    e.preventDefault();
    const usernameEl = document.querySelector(".username").value;
    const passwordEl = document.querySelector(".password").value;
    const errorMessageEl = document.querySelector(".error_message");

    if (usernameEl === "") {
      errorMessageEl.innerText = "빈 값은 사용하실 수 없습니다.";
    } else if (usernameEl.length < 2) {
      errorMessageEl.innerText = "아이디는 2자리 이상 작성해 주세요.";
    } else if (passwordEl.length < 8) {
      errorMessageEl.innerText = "패스워드는 8자리 이상 작성해 주세요.";
    } else if (usernameEl !== user.username) {
      errorMessageEl.innerText = "아이디가 틀렸습니다.";
    } else if (passwordEl !== user.password) {
      errorMessageEl.innerText = "패스워드가 틀렸습니다.";
    } else {
      window.location.href = "./index.html";
      // window.location.href = "../index.html";
    }
  };

  formEl.addEventListener("submit", loginHandler);
})(); //end

// #유효성 검사
// 1. id는 2자리 이상
// 2. 패스워드 8자리 이상
// 3. 로그인 가능 유무
