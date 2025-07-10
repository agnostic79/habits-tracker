import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Frequency = "daily" | "weekly";

export interface Habit {
  id: string;
  name: string;
  frequency: Frequency;
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
    addHabit: (state, action: PayloadAction<{ name: string; frequency: Frequency }>) => {
      const newHabit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
  },
});

export const { addHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
