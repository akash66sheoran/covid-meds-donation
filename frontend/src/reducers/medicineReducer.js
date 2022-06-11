import {
    REQUEST_MEDICINE_REQUEST,
    REQUEST_MEDICINE_SUCCESS,
    REQUEST_MEDICINE_FAIL,
    DONATE_MEDICINE_REQUEST,
    DONATE_MEDICINE_SUCCESS,
    DONATE_MEDICINE_FAIL,
    ALL_MEDICINES_REQUEST,
    ALL_MEDICINES_SUCCESS,
    ALL_MEDICINES_FAIL,
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

export const donateMedicineReducer = (state = { medicine: {} }, action) => {
    switch (action.type) {
        case DONATE_MEDICINE_REQUEST:
            return {
                loading: true,
                medicine: {}
            }

        case DONATE_MEDICINE_SUCCESS:
            return {
                loading: false,
                medicine: action.payload
            }

        case DONATE_MEDICINE_FAIL:
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

export const medicinesReducer = (state = { medicines: [] }, action) => {
    switch (action.type) {
        case ALL_MEDICINES_REQUEST:
            return {
                loading: true,
                medicines: []
            }

        case ALL_MEDICINES_SUCCESS:
            return {
                loading: false,
                medicines: action.payload.medicines
            }

        case ALL_MEDICINES_FAIL:
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