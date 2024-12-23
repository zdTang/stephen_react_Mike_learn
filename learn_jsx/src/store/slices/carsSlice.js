import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    cars: [],
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
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
      console.log("State after addCar:", JSON.stringify(state.cars));
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      console.log("State after removeCar:", JSON.stringify(state.cars));
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
