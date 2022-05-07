import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  rockets: [{ name: "meme" }],
};

const rocketSlice = createSlice({
  name: "rocketData",
  initialState,
  reducers: {
    replaceRockets(state, action) {
      state.rockets = action.payload.rockets;
      console.log("hiiii");
    },
  },
});

export const fetchRocketLaunchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches/");

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const rocketLaunchFetchedData = await fetchData();
      const rockets = [];

      rocketLaunchFetchedData.forEach((arrayItem) => {
        // console.log(arrayItem.rocket.rocket_name)
        rockets.push({ name: arrayItem.rocket.rocket_name });
      });

      dispatch(rocketActions.replaceRockets({ rockets: rockets }));
      console.log(rocketSlice.rockets);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
};

const store = configureStore({
  reducer: { rocket: rocketSlice.reducer },
});

export const rocketActions = rocketSlice.actions;
export default store;
