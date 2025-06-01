import authApi from "./authApi";

/**내 정보 불러오기 API */
const userInfoApi = async (token) => {
  try {
    const response = await authApi(token).get("users/me");
    return response.data;
  } catch (err) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    } else if (err.response) {
      throw new Error(`오류 발생 (status: ${err.response.status})`);
    } else if (err.request) {
      throw new Error("서버로부터 응답이 없습니다.");
    } else {
      throw new Error("요청 중 알 수 없는 오류가 발생했습니다.");
    }
  }
};

export default userInfoApi;
