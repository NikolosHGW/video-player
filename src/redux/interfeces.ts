export interface IVideos {
  videoUrl: string;
  videoType: string;
}

export interface IState {
  videos: IVideos[];
  currentIndex: number;
}
