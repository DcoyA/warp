/**
 * zustand에서 persist를 이용해 localstorage를 사용시 hydration에러를 위한 hook..
 * hydration이 완료되지 않은 상태에서(SSR) zustand의 localStorage(window객체에 있는)의 데이터가
 * 포함되어 있고 서버 렌더링 저장소에 초기 상태 값이 있어 저장소의 상태 데이터가 일치하지 않으므로 hydration오류 발생
 *
 * 커스텀 hook으로 상태를 생성하고 useEffect내부에 zustand 저장소의 상태를 작성해 저장소의 값에 접근하도록해서 문제 해결
 */

import { useState, useEffect } from "react";

const useUser = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useUser;
