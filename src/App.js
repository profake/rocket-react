import { useEffect, useState, useRef } from "react";
import {
  fetchRocketLaunchData,
  searchRocketLaunchData,
  filterRocketLaunchData,
  filterRocketLaunchDataByStatus,
  filterRocketLaunchDataByUpcoming,
} from "./store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import Appbar from "./components/Appbar";
import NoData from "./components/NoData";
import LoadingSpinner from "./components/LoadingSpinner";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, Grid } from "@mui/material";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import { Box } from "@mui/system";

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
  const hasDataLoaded = useSelector((state) => state.rocket.dataLoaded);
  const [searchText, setSearchText] = useState();
  const [filterTimestamp, setFilterTimestamp] = useState(0);
  const [filterUpcoming, setFilterUpcoming] = useState(0);
  const [filterStatus, setFilterStatus] = useState(0);

  const searchHandler = (searchTxt) => {
    setSearchText(searchTxt.trim());
  };

  const filterHandler = (filterTxt) => {
    var date = new Date();
    console.log(filterTxt)

    switch(filterTxt.valueOf()) {
      case "None":
        dispatch(filterRocketLaunchData(0));
        break;
      case "Last week":
        date.setDate(date.getDate() - 7);
        setFilterTimestamp(date.getTime());
        break;
      case "Last month":
        date.setMonth(date.getMonth() - 1);
        setFilterTimestamp(date.getTime());
        break;
      case "Last year":
        date.setMonth(date.getMonth() - 12);
        setFilterTimestamp(date.getTime());
        break;
      case "Last two years":
        date.setMonth(date.getMonth() - 24);
        setFilterTimestamp(date.getTime());
        break;
      case "status":
        setFilterStatus(!filterStatus)
        break;
      case "upcoming":
        setFilterUpcoming(!filterUpcoming)
        break;
      default:
    }
    console.log(date.getTime());
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      console.log("Called")
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

  useEffect(() => {
    dispatch(filterRocketLaunchDataByStatus(filterStatus));
  }, [filterStatus]);

  useEffect(() => {
    dispatch(filterRocketLaunchDataByUpcoming(filterUpcoming));
  }, [filterUpcoming]);


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar filter={filterHandler} search={searchHandler} />
      {data.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          {hasDataLoaded ? <NoData/> : <LoadingSpinner />}
        </Box>
      ) : (
        <Container>
          <>
            <Grid paddingTop="10px" container rowSpacing={2} columnSpacing={3}>
              {data.map((item) => {
                const date = new Date(
                  item.launch_date_unix * 1000
                ).toLocaleDateString("en-US");
                const time = new Date(
                  item.launch_date_unix * 1000
                ).toLocaleTimeString("en-US");
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    align="center"
                    key={item.mission_name}
                  >
                    <Card
                      number={item.key}
                      mission_name={item.mission_name}
                      img_url={item.img_url}
                      wiki_url={item.wiki_url}
                      yt_url={item.yt_url}
                      rocket_name={item.rocket_name}
                      date={date}
                      time={time}
                      upcoming={item.upcoming}
                      launch_success={item.launch_success}
                    ></Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;
