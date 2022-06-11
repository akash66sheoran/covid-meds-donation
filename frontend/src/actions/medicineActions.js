import {
    REQUEST_MEDICINE_REQUEST,
    REQUEST_MEDICINE_SUCCESS,
    REQUEST_MEDICINE_FAIL,
    DONATE_MEDICINE_REQUEST,
    DONATE_MEDICINE_SUCCESS,
    DONATE_MEDICINE_FAIL,
    CLEAR_ERRORS
} from '../constants/medicineConstants'

import axios from 'axios'

export const requestMedicine = (productData) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_MEDICINE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/request`, productData, config)

        dispatch({
            type: REQUEST_MEDICINE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: REQUEST_MEDICINE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const donateMedicine = (productData) => async (dispatch) => {
    try {
        dispatch({ type: DONATE_MEDICINE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/donate`, productData, config)

        dispatch({
            type: DONATE_MEDICINE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DONATE_MEDICINE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}