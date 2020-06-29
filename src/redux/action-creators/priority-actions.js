import { PriorityTypes } from "../types/types";

export const handlePriorityChange = (id, priority) => ({
  type: PriorityTypes.CHANGE_PRIORITY,
  payload: { id, priority },
});
