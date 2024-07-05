import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../Actiontype";

export const increment = (dispatch) => () => {
    dispatch({ type: INCREMENT_COUNTER});

}

export const decrement = () => () => {
    dispatch({ type: DECREMENT_COUNTER });

}