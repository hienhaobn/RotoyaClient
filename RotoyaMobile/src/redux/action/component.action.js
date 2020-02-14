import { EActionRedux } from '../../constants/actions.constants';

export const setShowFilterHomeAction = (showFilterHome) => {
    return {
        type: EActionRedux.SET_SHOW_FILTER_HOME,
        showFilterHome
    }
}

export const setOptionsGetSportCenters = (optionsGetSportCenters) => {
    return {
        type: EActionRedux.SET_OPTIONS_GET_SPORTCENTERS,
        optionsGetSportCenters
    }
}