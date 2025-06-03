import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import yulikelion from "../assets/yulikelion.png";

/**메인 페이지 */
const Home = () => {
  const { accessToken, logout } = useContext(AuthContext);

  return (
    <div className="font-['Tenada'] flex flex-col h-screen w-screen items-center justify-center space-y-3 bg-gradient-to-l from-purple-200 to-pink-100">
      {!accessToken ? (
        <>
          <div className="font-['Tenada'] text-5xl text-gray-800">
            🦁 반가워요! 👋
          </div>
          <img
            src={yulikelion}
            alt="yu-likelion"
            className="w-56 rounded-full mt-5 mb-8"
          />
          <Link
            to={"/sign-in"}
            className="w-xs bg-black text-white p-2 rounded-xl text-center hover:bg-gray-800 transition"
          >
            로그인
          </Link>
          <Link
            to={"/sign-up"}
            className="link rounded-xl w-xs bg-white hover:bg-gray-100 transition"
          >
            회원가입
          </Link>
        </>
      ) : (
        <>
          <Link
            to={"/user-info"}
            className="w-xs bg-black text-white  hover:bg-indigo-800 p-2 rounded-xl text-center transition"
          >
            나의 정보 보기
          </Link>
          <Link
            to={"/user-list"}
            className="w-xs bg-black text-white  hover:bg-indigo-800 p-2 rounded-xl text-center transition"
          >
            전체 회원 조회
          </Link>
          <button
            onClick={logout}
            className="w-xs mt-5 bg-white text-red-500 p-2 rounded-xl text-center hover:bg-red-800 transition"
          >
            로그아웃
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
