import {
    REQUEST_MEDICINE_REQUEST,
    REQUEST_MEDICINE_SUCCESS,
    REQUEST_MEDICINE_FAIL,
    CLEAR_ERRORS
} from '../constants/medicineConstants'

export const requestMedicineReducer = (state = { medicine: {} }, action) => {
    switch (action.type) {
        case REQUEST_MEDICINE_REQUEST:
            return {
                loading: true,
                medicine: {}
            }

        case REQUEST_MEDICINE_SUCCESS:
            return {
                loading: false,
                medicine: action.payload
            }

        case REQUEST_MEDICINE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}