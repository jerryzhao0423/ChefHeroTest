import * as orderActions from '../actions/orderActions';

const initialState = {
    orderList: [],
    filteredList: [],
    supplierList: [],
};

export default function orderReducer(state = initialState, action = {}) {
    let newList = state.orderList.slice(0);
    switch (action.type) {
        case orderActions.GET_ORDER_DATA:
            return Object.assign({ ...state, filteredList: action.payload, orderList: action.payload });
        case orderActions.GET_SUPPLIER_LIST:
            const supplierListObj = {};
            if (action.payload) {
                action.payload.forEach(({ vendorName }) => {
                    if (!supplierListObj[vendorName]) {
                        supplierListObj[vendorName] = 1;
                    }
                });
            }
            return Object.assign({ ...state, supplierList: Object.keys(supplierListObj) });
        case orderActions.FILTER_SUPPLIER_LIST:
            newList = newList.filter((item) => item.vendorName === action.filter);
            return Object.assign({ ...state, filteredList: newList });
        case orderActions.RESET_SUPPLIER_LIST:
            return Object.assign({ ...state, filteredList: newList });
        default:
            return state;
    }
}
