// TODO: add and export your own actions
import CityDB from "../city-db.js";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: CityDB
  };
}
