import { useEffect, useState, useRef } from "react";
import {
  fetchRocketLaunchData,
  searchRocketLaunchData,
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
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState();

  const searchHandler = (searchTxt) => {
    if (searchTxt.trim() !== "") setSearchText(searchTxt.trim());
  };

  const pageHandlerPrev = () => {
    setPageNumber(Math.max(1, pageNumber - 1));
    window.scrollTo(0, 0);
  };

  const pageHandlerNext = () => {
    setPageNumber(pageNumber + 1);
    window.scrollTo(0, 0);
    console.log(pageNumber);
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
    dispatch(fetchRocketLaunchData((pageNumber - 1) * 10));
    console.log(data.length);
  }, [dispatch, pageNumber]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar search={searchHandler} />
      <Container>
        <Grid
          paddingTop="10px"
          container
          rowSpacing={2}
          columnSpacing={3}
        >
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

        <Box my={2} display="flex" justifyContent="center">
          <ButtonGroup variant="text" aria-label="primary button group">
            <Button onClick={pageHandlerPrev}>Prev</Button>
            <Button onClick={pageHandlerNext}>Next</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
