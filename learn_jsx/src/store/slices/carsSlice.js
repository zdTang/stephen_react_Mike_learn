import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      console.log(
        "State after changeSearchTerm:",
        JSON.stringify(state.searchTerm)
      );
    },
    addCar: (state, action) => {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
      console.log("State after addCar:", JSON.stringify(state.data));
    },
    removeCar: (state, action) => {
      state.data = state.data.filter((car) => car.id !== action.payload);
      console.log("State after removeCar:", JSON.stringify(state.data));
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
