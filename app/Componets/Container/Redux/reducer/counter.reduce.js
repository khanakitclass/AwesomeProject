import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../Actiontype";

const initialState =  {
    count : 0
}

export const counterReader  = (state= initialState, action) => {

    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER : 
        return {
            count :  state.count +1 
        }

        case DECREMENT_COUNTER : 
            return {
            count :  state.count -1
         }

         default {
            return state;
         }
    }
}