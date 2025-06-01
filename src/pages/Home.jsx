import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

/**메인 페이지 */
const Home = () => {
  const { accessToken, logout } = useContext(AuthContext);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {!accessToken ? (
        <>
          <Link to={"/sign-in"} className="link">
            로그인
          </Link>
          <Link to={"/sign-up"} className="link">
            회원가입
          </Link>
        </>
      ) : (
        <>
          <button onClick={logout}>로그아웃</button>
          <Link to={"/user-info"} className="link">
            나의 정보 보기
          </Link>
          <Link to={"/user-list"} className="link">
            전체 회원 조회
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
