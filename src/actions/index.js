import cityDb from "../city-db.js";

export const SET_CITIES = "SET_CITIES";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cityDb
  };
}
