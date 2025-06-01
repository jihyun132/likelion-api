import { useNavigate } from "react-router-dom";
import SignInApi from "../apis/SignInApi";
import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";

/**로그인 페이지 */
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const SignInHandler = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };

    try {
      const result = await SignInApi(body);
      login(result.accessToken);
      alert("로그인이 완료되었습니다!");
      navigate("/");
    } catch (err) {
      alert(`로그인 실패: ${err.message}`);
      console.error("로그인 에러:", err);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-l from-purple-200 to-pink-100">
      <fieldset className="border p-5 bg-white">
        <legend className="p-2 font-['Tenada'] text-2xl">로그인</legend>
        <form onSubmit={SignInHandler} className="flex flex-col gap-2 p-5 w-xs">
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
          <button
            type="submit"
            className=" font-['Tenada'] bg-black text-white p-2 rounded-xl text-center 
            hover:bg-gray-800 transition mt-5"
          >
            로그인
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default SignIn;
