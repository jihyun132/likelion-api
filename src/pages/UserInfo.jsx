import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import userInfoApi from "../apis/userInfoApi";
import updateNicknameApi from "../apis/updateNicknameApi";

/**내 정보 조회 페이지 */
const UserInfo = () => {
  const [userInfo, setUserInfo] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState("");

  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const result = await userInfoApi(accessToken);
        setUserInfo(result);
      } catch (err) {
        alert(`사용자 정보 조회 실패: ${err.message}`);
        console.error("사용자 정보 조회 에러:", err);
      }
    };

    if (accessToken) fetchUserInfo();
  }, [accessToken]);

  const handleEditClick = () => {
    setNewNickname(userInfo.nickname);
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateNicknameApi(accessToken, { nickname: newNickname });
      setUserInfo({ ...userInfo, nickname: newNickname });
      setIsEditing(false);
      alert("닉네임이 변경되었습니다!");
    } catch (err) {
      alert(`닉네임 변경 실패: ${err.message}`);
      console.error("닉네임 변경 에러:", err);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-l from-blue-100 to-purple-200">
      <fieldset className="border p-5 pb-10 bg-white w-sm">
        <legend className="p-2 font-['Tenada'] text-2xl">회원 정보</legend>
        {userInfo ? (
          <>
            <div>
              <strong className="mr-2">번호:</strong>
              {userInfo?.userId}
            </div>
            <div>
              <strong className="mr-2">ID:</strong>
              {userInfo?.username}
            </div>
            <div>
              <strong className="mr-2">닉네임:</strong>
              {!isEditing ? (
                <>
                  {userInfo?.nickname}
                  <button
                    onClick={handleEditClick}
                    className="px-3 py-1 ml-5 bg-black text-white p-2 rounded-xl text-sm text-center
                    hover:bg-gray-700 transition mt-5"
                  >
                    수정하기
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={newNickname}
                    onChange={(e) => setNewNickname(e.target.value)}
                    className="border border-gray-300 px-5 py-0.5 rounded-xl"
                  />
                  <button
                    onClick={handleSaveClick}
                    className="px-3 py-1 ml-2 bg-black text-white p-2 rounded-xl text-sm text-centerq
                    hover:bg-gray-700 transition mt-5"
                  >
                    저장
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <p>회원 정보가 없습니다.</p>
        )}
      </fieldset>
    </div>
  );
};

export default UserInfo;
