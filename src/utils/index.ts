import type { Habit } from "../store/habitsSlice";

export const getStreak = (habit: Habit) => {
  let streak = 0;
  const currentDate = new Date();

  while (true) {
    const dateString = currentDate.toISOString().split("T")[0];

    if (habit.completedDates.includes(dateString)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};
