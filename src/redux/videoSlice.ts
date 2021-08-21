import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IVideos } from "./interfeces";

const initialState: IState = {
  videos: [],
  currentIndex: 0,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<IVideos[]>) => {
      action.payload.forEach((item) => {
        state.videos.push(item);
      });
    },
    setNextVideo: (state) => {
      state.currentIndex += 1;
    },
    setPrevVideo: (state) => {
      state.currentIndex -= 1;
    },
  },
});

export const { reducer } = videoSlice;

export const { setVideo, setNextVideo, setPrevVideo } = videoSlice.actions;
