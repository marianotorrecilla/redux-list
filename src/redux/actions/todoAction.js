//ALTA
//MODIFICACION
// BAJA

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MODIFY_TODO = "MODIFY_TODO";
export const U_TODO = "U_TODO";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const modifyTodo = (payload) => {
    return {
        type: MODIFY_TODO,
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: U_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}