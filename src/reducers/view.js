import * as Types from "../constants/ActionTypes";

const initialState = {
  zoomFullScreen: false,
  zoomOut: false,
  zoomIn: false,
  videos: [],
  video: null,
  keyword: "",
  sec: 1,
  secCurrent: 0,
  volume: 50,
  play: true,
  loadingPlay: false,
  reset: true,
  headerZoom: true,
  modalZ: false
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_INFORMATION:
      state[action.name] = action.value;
      return { ...state };
    case Types.RESET_VIEW:
      state.sec = 1;
      state.play = true;
      state.secCurrent = 0;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
