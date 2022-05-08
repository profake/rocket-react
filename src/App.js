import { useEffect, useState, useRef } from "react";
import {
  fetchRocketLaunchData,
  searchRocketLaunchData,
  filterRocketLaunchData,
} from "./store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Card from "./components/Card";
import Appbar from "./components/Appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    textTransform: "none",
  },
});

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rocket.rockets);
  const [searchText, setSearchText] = useState();
  const [filterTimestamp, setFilterTimestamp] = useState(0);

  const searchHandler = (searchTxt) => {
    if (searchTxt.trim() !== "") setSearchText(searchTxt.trim());
  };

  const filterHandler = (filterTxt) => {
    var date = new Date();

    if (filterTxt.valueOf() === "None") {
      setFilterTimestamp(0);
    } 
    
    else if (filterTxt.valueOf() === "Last week") {
      date.setDate(date.getDate() - 7);
      setFilterTimestamp(date.getTime());
    } 
    
    else if (filterTxt.valueOf() === "Last month") {
      date.setMonth(date.getMonth() - 1);
      setFilterTimestamp(date.getTime());
    } 
    
    else if (filterTxt.valueOf() === "Last year") {
      date.setMonth(date.getMonth() - 12);
      setFilterTimestamp(date.getTime());
    }
    
    else if (filterTxt.valueOf() === "Last two years") {
      date.setMonth(date.getMonth() - 24);
      setFilterTimestamp(date.getTime());
    }

    console.log(date.getTime())
  };


  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    dispatch(searchRocketLaunchData(searchText));
  }, [searchText]);

  useEffect(() => {
    dispatch(filterRocketLaunchData(filterTimestamp));
  }, [filterTimestamp]);

  useEffect(() => {
    dispatch(fetchRocketLaunchData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar filter={filterHandler} search={searchHandler} />
      <Container>
        <Grid paddingTop="10px" container rowSpacing={2} columnSpacing={3}>
          {data.map((item) => {
            const date = new Date(
              item.launch_date_unix * 1000
            ).toLocaleDateString("en-US");
            const time = new Date(
              item.launch_date_unix * 1000
            ).toLocaleTimeString("en-US");
            return (
              <Grid item xs={12} md={4} align="center" key={item.key}>
                <Card
                  number={item.key}
                  mission_name={item.mission_name}
                  img_url={item.img_url}
                  rocket_name={item.rocket_name}
                  date={date}
                  time={time}
                ></Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
