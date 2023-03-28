export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing
    token: 
        "BQAIS3wQusr0DBRmWhE1tG2YoiuDiaSMTBFaabRtf_rOLN9Mb8sb_nMPniT7grUKk5p4hI19lbm96ZSpWwrrNuABoUgiQrtEjCCr9y0Z2lrmVh6yC_OpRykR5ZNVTZrygpLpyjrMBJocCkQFPOesLO69VlgD4pkNziG5ID2Wh_ZfZyNo3rCIGC1WrLUrQ_O2cRTI_gDxKS0mrx_lHz60cA"
}

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;