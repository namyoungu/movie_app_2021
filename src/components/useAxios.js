import defaultAxios from "axios";
import { useEffect, useState } from "react";

/*
컴포넌트 최상위에서 Hook이 호출되어야만 하는 이유
리액트는 Hook이 호출되는 순서에 의존하여 '특정 state가 useState 호출에 해당하는지 알 수 있다.'
따라서 조건문이 중간에 삽입되면 Hook의 순서가 꼬이고 버그가 발생하게 된다.
*/

const useAxios = (opts, axiosInstance = defaultAxios) => {
  // if (!opts.url) {
  //   return;
  // }
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })

  const [trigger, setTrigger] = useState(0);


  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        console.log(trigger);
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
        console.log(`useAxios Error : ${error}`);
      });
  }, [trigger]);

  return state;
};

export default useAxios;