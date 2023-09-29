import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from 'firebasemanager.js';

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 사용자 로그인 함수
function loginUser(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // 로그인 성공 시 처리
      const user = userCredential.user;
      console.log("로그인 성공: ", user);
      return user;
    })
    .catch((error) => {
      // 로그인 실패 시 처리
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("로그인 실패: ", errorCode, errorMessage);
      throw error;
    });
}

export { loginUser };