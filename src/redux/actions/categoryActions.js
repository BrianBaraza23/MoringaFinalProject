import {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFail,
} from "../slices/categorySlices";
import axios from "axios";

export const createCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: addCategoryStart });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/admin/create-category",
      category,
      config
    );
    dispatch({ type: addCategorySuccess, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: addCategoryFail, payload: err });
  }
};
