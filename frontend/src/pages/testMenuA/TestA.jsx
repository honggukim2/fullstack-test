import React, { useEffect, useState } from "react";
import axios from "axios";  // axios를 직접 import



const TestA = () => {
  const [testData, setData] = useState("");  // 가져온 데이터를 저장할 상태

  useEffect(() => {
    fetchData();  // 컴포넌트가 마운트될 때 데이터 가져오기 함수 호출
  }, []);

  const fetchData = async () => {
    try {
      // '/boot/api/hi' 경로로 GET 요청
      const response = await axios.get("/boot/api/hi");
      setData(response.data);  // 응답 데이터 상태로 설정
    } catch (error) {
      console.error("Error fetching data:", error);  // 에러 발생 시 콘솔에 출력
    }
  };

  return (
    <div>
      <h1>TestA 페이지</h1>
      <div>
        <h2>GET 요청 결과:</h2>
        <p>{testData}</p>  {/* 가져온 데이터 화면에 표시 */}
      </div>
    </div>
  );
};

export default TestA;
