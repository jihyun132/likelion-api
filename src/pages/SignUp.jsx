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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-l from-purple-200 to-pink-100">
      <fieldset className="border p-5 bg-white">
        <legend className="p-2 font-['Tenada'] text-2xl">회원가입</legend>
        <form onSubmit={signUpHandler} className="flex flex-col gap-2 p-5 w-xs">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID"
            className="px-5"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="px-5"
          />
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
            className="px-5"
          />

          <button
            type="submit"
            className=" font-['Tenada'] bg-black text-white p-2 rounded-xl text-center 
            hover:bg-gray-800 transition mt-5"
          >
            회원가입
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
