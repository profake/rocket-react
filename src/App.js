import { useEffect, useState } from "react";
import { fetchRocketLaunchData } from "./store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Card from "./components/Card";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, List, ListItem } from "@mui/material";
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
      fontFamily: "'Open Sans', sans-serif",
      textTransform: 'none',
  }
});

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rocket.rockets);
  const [pageNumber, setPageNumber] = useState();

  const paginationChangeHandler = (event, page) => {
    setPageNumber(page);
    console.log(page);
  };

  useEffect(() => {
    dispatch(fetchRocketLaunchData(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container >
        <Box display="flex" justifyContent="center" alignItems="center">
          <List >
            {data.map((item) => {
              return (
                <ListItem>
                  <Card
                    mission_name={item.mission_name}
                    img_url={item.img_url}
                    rocket_name={item.rocket_name}
                  ></Card>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box my={2} display="flex" justifyContent="center">
          <Pagination
            count={10}
            size="small"
            onChange={paginationChangeHandler}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
