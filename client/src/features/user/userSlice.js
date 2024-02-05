import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { authService } from "./userService"
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkApi) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
export const createUser = createAsyncThunk("auth/create-user", async (userData, thunkApi) => {
    try {
        return await authService.createUser(userData)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
export const resentOtp = createAsyncThunk("auth/resent-otp", async (userData, thunkApi) => {
    try {
        return await authService.resentOtp(userData)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkApi) => {
    try {
        return await authService.login(userData)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const loginGoogle = createAsyncThunk("auth/login-google", async (userData, thunkApi) => {
    try {
        return await authService.google(userData)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const profileUser = createAsyncThunk("auth/profile", async (token, thunkApi) => {
    try {
        return await authService.profile(token)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const updateUser = createAsyncThunk("auth/update-user", async (data, thunkApi) => {
    try {
        return await authService.updateUser(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const updateUserProfile = createAsyncThunk("auth/update-user-profile", async (data, thunkApi) => {
    try {
        return await authService.updateUserProfile(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const logoutUser = createAsyncThunk("auth/logout", (thunkApi) => {
    try {
        return authService.logout()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const resetState = createAction("Reset_all")

const getTokenFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getTokenFromLocalStorage,
    createdUser: null,
    isError: "",
    isSuccess: "",
    isLoading: "",
    message: "",
    profile: "",
    allUser: "",
    createdUserVerif: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdUser = action.payload;
                if (state.isSuccess === true) {
                    toast.info("Verifie your email")
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.createdUserVerif = null;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message)
                }
            })
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdUserVerif = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Created Successfully")
                }
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message)
                }
            })
            .addCase(resentOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resentOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.resentOtp = action.payload;
                if (state.isSuccess === true) {
                    toast.info("resent otp Successfully")
                }
            })
            .addCase(resentOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                // if (state.isError === true) {
                //     toast.error(action.payload.response.data.message)
                // }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.user.verified === true) {
                    // localStorage.setItem("user", JSON.stringify(action.payload))
                    toast.info("User Login Successfully")
                } else (
                    toast.info("verified your account")
                )
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message)
                }
            })
            .addCase(loginGoogle.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginGoogle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                if (state.isSuccess === true) {
                    // localStorage.setItem("user", JSON.stringify(action.payload))
                    toast.info("User Login Successfully")
                }
            })
            .addCase(loginGoogle.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.payload.response.data.message)
                }
            })
            .addCase(profileUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(profileUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.profile = action.payload;
            })
            .addCase(profileUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userUpdated = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Updateted Successfully")
                }
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userProfileUpdated = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Profiles Updateted Successfully")
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = null;
                if (state.isSuccess === true) {
                    toast.info("User Logout Successfully")
                }
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                // if (state.isError === true) {
                //     toast.error(action.payload.response.data.message)
                // }
            })
            .addCase(resetState, (state) => {
                state.user = null;
                state.createdUser = null;
                state.createdUserVerif = null;
            })
    }
})

export default authSlice.reducer