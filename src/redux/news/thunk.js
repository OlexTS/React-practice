import { createAsyncThunk} from "@reduxjs/toolkit";
import { getTopNews, getNews } from "../../services/getNews";

export const getNewsThunk = createAsyncThunk("news/getTopNews", async () => {
    return await getTopNews();
  });
export const getNewsSearchThunk = createAsyncThunk("news/getNews", async ({searchNews, page}) => {
    return await getNews(searchNews, page);
  });