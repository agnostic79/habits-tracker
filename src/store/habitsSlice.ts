import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: () => {},
  },
});

export const { addHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
