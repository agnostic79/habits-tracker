import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import { Box, Paper, Grid, Typography, Button, LinearProgress } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { removeHabit, toggleHabit } from "../store/habitsSlice";
import { getStreak } from "../utils";

const HabitsList = () => {
  const { habits } = useSelector((state: RootState) => state.habits);

  const dispatch = useDispatch<AppDispatch>();

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        const streak = getStreak(habit);
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid size={{ xs: 12, sm: 6 }} sx={{ marginBottom: ".5rem" }}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textTransform: "capitalize" }}>
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                    startIcon={<CheckCircleOutlineOutlinedIcon />}
                    sx={{ fontSize: "12px", lineHeight: "1" }}
                    onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}
                  >
                    {habit.completedDates.includes(today) ? "Completed" : "Mark Completed"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<HighlightOffOutlinedIcon />}
                    sx={{ fontSize: "12px", lineHeight: "1" }}
                    onClick={() => dispatch(removeHabit(habit.id))}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">
                Current Streak: {streak} {streak === 1 ? "day" : "days"}
              </Typography>
              <LinearProgress variant="determinate" value={(streak / 30) * 100} sx={{ mt: 1 }} />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitsList;
