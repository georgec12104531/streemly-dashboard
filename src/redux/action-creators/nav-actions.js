import { NavTypes } from "../types/types";

export const navChange = (id) => ({
  type: NavTypes.CHANGE_NAV,
  id,
});
