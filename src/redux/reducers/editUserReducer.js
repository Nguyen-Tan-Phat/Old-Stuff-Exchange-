const stateDefault = { id: '', userName: '', fullName: '', status: '', phone: '', createdAt: '', roleName: '' }

export const editUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'XEM_CHI_TIET_USER': {
            state = action.userClick;
            return { ...state }
        }
        default: return state
    }
}