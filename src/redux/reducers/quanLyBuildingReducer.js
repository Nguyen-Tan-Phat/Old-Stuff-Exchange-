const stateDefault = {
    arrBuilding: [],
    search1: [],
}
export const quanLyBuildingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_BUILDING': {
            state.arrBuilding = action.arrBuilding;
            return { ...state }
        }
        case 'SEARCH_DANH_SACH_BUILDING': {
            state.search1 = action.search1;
            return { ...state }
        }
        default: return state;
    }

}