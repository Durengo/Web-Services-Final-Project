export const UNIT_CHANGE_PROGRESS = "UNIT_CHANGE_PROGRESS";

export const setIsChangingUnits = (isChangingUnits) => {
    return {
        type: UNIT_CHANGE_PROGRESS,
        payload: isChangingUnits,
    };
};