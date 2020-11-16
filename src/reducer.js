export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQD_1QdT9nJ3Z0_FExnQ_tOnKFdwez1mK02pVTxQ_TuW1AFpCa3VzHWHQGiMSyrMi9bWJ3vPC-rzszWAa_99tQjzNajc1Xi8Nu_Ei0x5aQiIMWMf5Y_h0l5NORJJRnVnQoweqYYNApbYESO-g0pHzSg',
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;