import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitsState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
  //Simulating as API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockHabits: Habit[] = [
    {
      id: "1",
      name: "Read",
      frequency: "daily",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },

    {
      id: "2",
      name: "Exercise",
      frequency: "daily",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
  ];

  return mockHabits;
});

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
    toggleHabit: (state, action: PayloadAction<{ id: string; date: string }>) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);
      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },

    removeHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter((habit) => habit.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch habits";
      }),
});

export const { addHabit, toggleHabit, removeHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
