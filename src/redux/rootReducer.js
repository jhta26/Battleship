import { Actions } from 'react-native-router-flux';
export default function rootReducer(
    currentState = {
        rubrics: [],
    },
    action
) {
    switch (action.type) {
        case 'GET_RUBRICS_STARTED':
            return {
                ...currentState,
                isGettingRubrics: true
            };

    }
}