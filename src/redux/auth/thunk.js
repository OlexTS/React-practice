import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/auth-service";

export const loginThunk = createAsyncThunk("auth/login", (body) => login(body));
