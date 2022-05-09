import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  allRockets: [],
  rockets: [
    {
      key: 0,
      mission_name: "Abc",
      rocket_name: "test",
      img_url: null,
      wiki_url: null,
      yt_url: null,
      launch_success: true,
      launch_date_unix: 1143239400,
      upcoming: false,
    },
  ],
  dataLoaded: false,
};

const rocketSlice = createSlice({
  name: "rocketData",
  initialState,
  reducers: {
    replaceRockets(state, action) {
      if (action.payload.type === "init") {
        state.allRockets = action.payload.rockets;
        state.dataLoaded = true;
      }

      state.rockets = action.payload.rockets;
    },
  },
});

export const fetchRocketLaunchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");

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
        rockets.push({
          key: arrayItem.flight_number,
          mission_name: arrayItem.mission_name,
          rocket_name: arrayItem.rocket.rocket_name,
          img_url: arrayItem.links.mission_patch_small,
          wiki_url: arrayItem.links.wikipedia,
          yt_url: arrayItem.links.video_link,
          launch_success: arrayItem.launch_success,
          launch_date_unix: arrayItem.launch_date_unix,
          upcoming: arrayItem.upcoming,
        });
      });
      dispatch(
        rocketActions.replaceRockets({ type: "init", rockets: rockets })
      );
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
};

export const searchRocketLaunchData = (searchTerm) => {
  const searchResultRockets = [];

  return (dispatch, getState) => {
    const { rocket } = getState();
    const rockets = rocket.allRockets;

    rockets.forEach((arrayItem) => {
      const rocketName = arrayItem.rocket_name.toLowerCase();
      const search = searchTerm.toLowerCase();
  
      if (rocketName.includes(search)) {
        searchResultRockets.push(arrayItem);
      }
    });

    dispatch(rocketActions.replaceRockets({ rockets: searchResultRockets }));
  };
};

export const filterRocketLaunchData = (unixTimestamp, opts) => {
  const filteredRockets = [];

  return (dispatch, getState) => {
    const { rocket } = getState();
    const rockets = rocket.allRockets;

    rockets.forEach((arrayItem) => {
      const launchDate = arrayItem.launch_date_unix * 1000;

      if (launchDate >= unixTimestamp) {
        filteredRockets.push(arrayItem);
      }
    });

    dispatch(rocketActions.replaceRockets({ rockets: filteredRockets }));
  };
};

export const filterRocketLaunchDataByStatus = (order) => {
  const filteredRockets = [];

  return (dispatch, getState) => {
    const { rocket } = getState();
    const rockets = rocket.allRockets;

    rockets.forEach((arrayItem) => {
      const status = arrayItem.launch_success;

      if (status === order) {
        filteredRockets.push(arrayItem);
      }
    });

    dispatch(rocketActions.replaceRockets({ rockets: filteredRockets }));
  };
};

export const filterRocketLaunchDataByUpcoming = (order) => {
  const filteredRockets = [];

  return (dispatch, getState) => {
    const { rocket } = getState();
    const rockets = rocket.allRockets;

    rockets.forEach((arrayItem) => {
      const upcoming = arrayItem.upcoming;

      if (upcoming === order) {
        filteredRockets.push(arrayItem);
      }
    });

    dispatch(rocketActions.replaceRockets({ rockets: filteredRockets }));
  };
};

const store = configureStore({
  reducer: { rocket: rocketSlice.reducer },
});

export const rocketActions = rocketSlice.actions;
export default store;
