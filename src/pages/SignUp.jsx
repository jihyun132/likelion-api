import { useNavigate } from "react-router-dom";
import signUpApi from "../apis/signUpApi";
import { useState } from "react";

/**로그아웃 페이지 */
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
      nickname: nickname,
    };

    try {
      await signUpApi(body);
      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } catch (err) {
      alert(`회원가입 실패: ${err.message}`);
      console.error("회원가입 에러:", err);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <fieldset className="border p-5">
        <legend className="p-2">회원가입</legend>
        <form onSubmit={signUpHandler} className="flex flex-col gap-2 p-5">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
          />

          <button type="submit">회원가입</button>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
