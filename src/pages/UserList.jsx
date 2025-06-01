import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import userListApi from "../apis/userListApi";

/**전체 사용자 정보 조회 페이지 */
const UserList = () => {
  const [userList, setUserList] = useState([]);

  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const result = await userListApi(accessToken);
        setUserList(result);
      } catch (err) {
        alert(`전체 사용자 정보 조회 실패: ${err.message}`);
        console.error("전체 사용자 정보 조회 에러:", err);
      }
    };

    if (accessToken) fetchUserList();
  }, [accessToken]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <fieldset className="border p-5">
        <legend className="p-2">회원 목록</legend>
        {userList.length > 0 ? (
          <table className="table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">번호</th>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">닉네임</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.userId}>
                  <td className="border border-gray-300 p-2">{user.userId}</td>
                  <td className="border border-gray-300 p-2">
                    {user.username}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {user.nickname}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>회원 정보가 없습니다.</p>
        )}
      </fieldset>
    </div>
  );
};

export default UserList;
