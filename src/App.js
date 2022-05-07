import { useEffect } from "react";
import { fetchRocketLaunchData } from "./store/AppStore";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rocket.rockets);
  
  useEffect(() => {
    dispatch(fetchRocketLaunchData());
    
  }, [dispatch]);

  return data.map((item) => {
    return <p>{item.name}</p>;
  });
}

export default App;
