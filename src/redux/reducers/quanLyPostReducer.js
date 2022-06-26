

const stateDefault = {
    arrPost: []
};

export const quanLyPostReducer = (state = stateDefault, action) => {
    switch (action.type) {


        case 'LAY_DANH_SACH_POST': {
            state.arrPost = action.arrPost;
            return { ...state };
        }
        default: return state;
    }
}