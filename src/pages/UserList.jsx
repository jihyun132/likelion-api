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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-l from-blue-100 to-purple-200">
      <fieldset className="border p-5 pb-10 bg-white w-lg max-h-4/5">
        <legend className="p-2 font-['Tenada'] text-2xl">회원 목록</legend>
        {userList.length > 0 ? (
          <div className="overflow-hidden">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="grid grid-cols-7">
                  <th className="col-start-1 col-end-2 border border-white bg-orange-100 p-2">
                    번호
                  </th>
                  <th className="col-start-2 col-end-5 border border-white bg-orange-100 p-2">ID</th>
                  <th className="col-start-5 col-end-8 border border-white bg-orange-100 p-2">
                    닉네임
                  </th>
                </tr>
              </thead>
            </table>
            <div className="max-h-120 overflow-y-scroll">
              <table className="table-auto w-full">
                <tbody>
                  {userList.map((user) => (
                    <tr key={user.userId} className="grid grid-cols-7">
                      <td className="col-start-1 col-end-2 border-b border-l border-gray-300 p-2 text-center">
                        {user.userId}
                      </td>
                      <td className="col-start-2 col-end-5 border-b border-l border-gray-300 p-2">
                        {user.username}
                      </td>
                      <td className="col-start-5 col-end-8 border-b border-l border-r border-gray-300 p-2">
                        {user.nickname}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>회원 정보가 없습니다.</p>
        )}
      </fieldset>
    </div>
  );
};

export default UserList;
