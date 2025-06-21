import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",
  initialState: {
    color: "red"
  },
  reducers: {
    bgcolorChange: (state,actions) => {
      //console.log(actions.payload);
      
      state.color = actions.payload;
    }
  }
});

export const { bgcolorChange } = colorSlice.actions;
export default colorSlice.reducer;
