export const SHOW_LOADING_ICON = 'SHOW_LOADING_ICON';
export const HIDE_LOADING_ICON = 'HIDE_LOADING_ICON';
export const SHOW_LOADING_IMAGE_ICON = 'SHOW_LOADING_IMAGE_ICON';
export const HIDE_LOADING_IMAGE_ICON = 'HIDE_LOADING_IMAGE_ICON';
export const SHOW_RECORD_ERROR_BOX = 'SHOW_RECORD_ERROR_BOX';
export const SHOW_UPDATE_ERROR_BOX = 'SHOW_UPDATE_ERROR_BOX';
export const SHOW_ERROR_BOX = 'SHOW_ERROR_BOX';
export const HIDE_ERROR_BOX = 'HIDE_ERROR_BOX';
export const SHOW_SUCCESS_ALERT = 'SHOW_SUCCESS_ALERT';
export const HIDE_SUCCESS_ALERT = 'HIDE_SUCCESS_ALERT';

export function showLoadingIcon() {
    return {
        type: SHOW_LOADING_ICON,
    };
}

export function hideLoadingIcon() {
    return {
        type: HIDE_LOADING_ICON,
    };
}
export function showLoadingImageIcon() {
    return {
        type: SHOW_LOADING_IMAGE_ICON,
    };
}

export function hideLoadingImageIcon() {
    return {
        type: HIDE_LOADING_IMAGE_ICON,
    };
}
export function showErrorBox(message) {
    return {
        type: SHOW_ERROR_BOX,
        message,
    };
}
export function showRecordErrorBox(record) {
    return {
        type: SHOW_RECORD_ERROR_BOX,
        record,
    };
}
export function showUpdateErrorBox(error) {
    return {
        type: SHOW_UPDATE_ERROR_BOX,
        error,
    };
}
export function hideErrorBox() {
    return {
        type: HIDE_ERROR_BOX,
    };
}
export function showSuccessAlert() {
    return {
        type: SHOW_SUCCESS_ALERT,
    };
}
export function hideSuccessAlert() {
    return {
        type: HIDE_SUCCESS_ALERT,
    };
}
