
const stateDefault = { id: '', name: '', numberFloor: 0, numberRoom: 0, description: '', apartment: '' };


export const editBuidingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'XEM_CHI_TIET_BUILDING': {
            state = action.sanPhamClick;
            return { ...state }
        }
        default: return state;
    }
}