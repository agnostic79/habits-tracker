import { Provider } from "react-redux";
import "./App.css";

import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitsList from "./components/HabitsList";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" sx={{ paddingBlock: "2rem" }}>
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitsList />
      </Container>
    </Provider>
  );
}

export default App;
