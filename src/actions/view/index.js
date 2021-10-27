import * as Types from "../../constants/ActionTypes";

export const updateInformation = (name, value) => {
  return {
    type: Types.UPDATE_INFORMATION,
    name,
    value,
  };
};

export const resetView = () => {
  return {
    type: Types.RESET_VIEW,
  };
};
