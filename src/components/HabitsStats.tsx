import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import { fetchHabits } from "../store/habitsSlice";
import { LinearProgress, Typography, Paper } from "@mui/material";
import { getStreak } from "../utils";

const HabitsStats = () => {
  const { habits, isLoading, error } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  const getCompletedToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((habit) => habit.completedDates.includes(today)).length;
  };

  const getLongestStreak = () => {
    return Math.max(...habits.map((habit) => getStreak(habit)));
  };

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Habits Statistics
      </Typography>
      <Typography variant="body1">Total Habits: {habits.length}</Typography>
      <Typography variant="body1">Completed Today: {getCompletedToday()} </Typography>
      <Typography variant="body1">Longest Streak: {getLongestStreak()}</Typography>
    </Paper>
  );
};

export default HabitsStats;
