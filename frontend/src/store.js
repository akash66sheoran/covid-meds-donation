import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { requestMedicineReducer, donateMedicineReducer, medicinesReducer } from './reducers/medicineReducer'

const reducer = combineReducers({
    requestMedicine: requestMedicineReducer,
    donateMedicine: donateMedicineReducer,
    medicines: medicinesReducer
})

let initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store