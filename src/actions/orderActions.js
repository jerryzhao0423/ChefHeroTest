import { showLoadingIcon, hideLoadingIcon } from './uiActions';

export const GET_ORDER_DATA = 'GET_ORDER_DATA';
export const GET_SUPPLIER_LIST = 'GET_SUPPLIER_LIST';
export const FILTER_SUPPLIER_LIST = 'FILTER_SUPPLIER_LIST';
export const RESET_SUPPLIER_LIST = 'RESET_SUPPLIER_LIST';

export const fetchData = () => {
    const url = 'https://chefhero.free.beeceptor.com/';
    return (dispatch) => {
        dispatch(showLoadingIcon());
        return fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((obj) => {
                if (obj.data) {
                    dispatch(getOrderData(obj.data));
                    dispatch(getSupplierList(obj.data));
                }
                dispatch(hideLoadingIcon());
            })
            .catch((err) => {
                console.log(err);
                dispatch(hideLoadingIcon());
            });
    };
};

export const getOrderData = (response) => {
    return {
        type: GET_ORDER_DATA,
        payload: response,
    };
};

export const getSupplierList = (response) => {
    return {
        type: GET_SUPPLIER_LIST,
        payload: response,
    };
};

export const applyFilter = (filter) => {
    return {
        type: FILTER_SUPPLIER_LIST,
        filter,
    };
};

export const resetFilter = () => {
    return {
        type: RESET_SUPPLIER_LIST,
    };
};
