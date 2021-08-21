import { IAction, IState } from "./interfaces";

// const initialState: IState = {
//   videoUrl: '',
//   videoType: '',
// }

// export default function videoReducer(state = initialState, action: IAction): IState {
//   switch(action.type) {
//     case 'SET_VIDEO':
//       return { videoUrl: action.payload[0], videoType: action.payload[1] };
//     default:
//       return state;
//   }
// }

const initialState: IState = {
  videos: [],
  currentIndex: 0,
}

export default function videoReducer(state = initialState, action: IAction): IState {
  switch(action.type) {
    case 'SET_VIDEO':
      return { videos: action.payload, currentIndex: 0 };
    case 'NEXT_VIDEO':
      return { videos: state.videos, currentIndex: state.currentIndex += 1 };
    case 'PREV_VIDEO':
      return { videos: state.videos, currentIndex: state.currentIndex -= 1 };
    default:
      return state;
  }
}
