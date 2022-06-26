const stateDefault = {
    arrUser: []
};

export const quanLyUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_USER': {
            state.arrUser = action.arrUser;
            return { ...state }
        }


        default: return state;
    }
}