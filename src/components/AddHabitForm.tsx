import React, { useState } from "react";
import { addHabit, type Frequency } from "../store/habitsSlice";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("daily");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );

      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel sx={{ paddingInline: "0.5rem", background: "white" }}>Frequency</InputLabel>
          <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ paddingBlock: "0.6rem" }}>
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
