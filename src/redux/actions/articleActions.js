import {
  createArticleStart,
  createArticleSuccess,
  createArticleFail,
  listArticlesStart,
  listArticlesSuccess,
  listArticlesFail,
} from "../slices/articleSlices";
import axios from "axios";
import { BASE_URL } from "../../URL";

//  CREATE CATEGORY
export const createArticle = (article) => async (dispatch) => {
  try {
    dispatch(createArticleStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BASE_URL}/content`, article, config);
    dispatch(createArticleSuccess(data));
  } catch (err) {
    dispatch(createArticleFail("Error creating article"));
  }
};

// LIST CATEGORIES
export const listArticles = () => async (dispatch) => {
  try {
    dispatch(listArticlesStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/content`, config);
    dispatch(listArticlesSuccess(data));
  } catch (err) {
    dispatch(listArticlesFail("Error listing articles"));
  }
};
