import { Provider } from "react-redux";
import "./App.css";

import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitsList from "./components/HabitsList";
import HabitsStats from "./components/HabitsStats";

function App() {
  return (
    <Provider store={store}>
      <Container
        maxWidth="md"
        sx={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, .18)",
          paddingBlock: "2rem",
          borderRadius: "1rem",
          background: "white",
        }}
      >
        <Typography component="h1" variant="h2" align="center" sx={{ paddingBlock: "2rem" }}>
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitsList />
        <HabitsStats />
      </Container>
    </Provider>
  );
}

export default App;
