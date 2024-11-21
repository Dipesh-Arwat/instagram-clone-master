// activePostReducer.js
export const initialState = {
    isOpenModal: false,
    activePost: null,
    isOpenPostModal: false,
    isOpenFollowingModal: false,
    isOpenFollowersModal: false,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "setActivePost":
        return { ...state, isOpenModal: true, activePost: action.payload };
      case "reset":
        return initialState;
      case "openPostModal":
        return { ...state, isOpenPostModal: true };
      case "openFollowingModal":
        return { ...state, isOpenFollowingModal: true };
      case "openFollowersModal":
        return { ...state, isOpenFollowersModal: true };
      default:
        throw new Error("UNKNOWN ACTION TYPE");
    }
  }
  