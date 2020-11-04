// add feature action provider?
export const ADD_FEATURE = 'ADD_FEATURE';

// add feature action creater
export const addFeature = (input) => {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}

// add price action provider
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// add price action creater
export const removeFeature = (input) => {
    return {
        type: REMOVE_FEATURE,
        payload: input
    }
}
