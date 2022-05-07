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
    // item.upcoming;
    return (
      <div>
        <p>{item.mission_name}</p>
        <p>{item.rocket_name}</p>
        <img src={item.img_url} />
        <p>{item.launch_success}</p>
        <p>
          {new Date(item.launch_date_unix * 1000).toLocaleDateString("en-US")}
        </p>
      </div>
    );
  });
}

export default App;
