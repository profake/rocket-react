import { useEffect, useState } from "react";
import { fetchRocketLaunchData } from "./store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Card from "./components/Card";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rocket.rockets);
  const [pageNumber, setPageNumber] = useState();

  const paginationChangeHandler = (event, page) => {setPageNumber(page); console.log(page)};

  useEffect(() => {
    dispatch(fetchRocketLaunchData(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Pagination count={10} onChange={paginationChangeHandler}/>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <Card
                mission_name={item.mission_name}
                img_url={item.img_url}
                rocket_name={item.rocket_name}
              ></Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
