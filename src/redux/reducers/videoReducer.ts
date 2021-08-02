import { IAction, IState } from "./interfaces";

const initialState: IState = {
  videoUrl: '',
  videoType: '',
}

export default function videoReducer(state = initialState, action: IAction): IState {
  switch(action.type) {
    case 'SET_VIDEO':
      return { videoUrl: action.payload[0], videoType: action.payload[1] };
    default:
      return state;
  }
}
