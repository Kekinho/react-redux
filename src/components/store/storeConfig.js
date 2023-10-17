import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    groups: function (state, action) {
        switch (action.type) {
            case 'CHANGE_DATA':
                return {
                    ...state,
                    data: action.payload,
                }
            default:
                return {
                    data:
                        [
                            { name: 'Group A', value: 150 },
                            { name: 'Group B', value: 300 },
                            { name: 'Group C', value: 50 },
                            { name: 'Group D', value: 200 },
                        ]
                }
        }

    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig