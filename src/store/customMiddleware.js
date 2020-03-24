export const customMiddleware = store => next => action => {

    switch (action.type) {
        case "GET_TITLE":
            let payload = {
                action: action.api,
                param: action.payload
            };
            break;
        default:
            return next(action);

    }
}