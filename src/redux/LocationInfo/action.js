import { SAVE_SEARCH } from './types';


export const setLocationData = (playload) => {
    return {
        type: SAVE_SEARCH,
        playload,
    };
}





