export function saveUser(user) {
    return dispatch => {

        dispatch({ type: 'SET_USER', user })
        console.log(user)
    }
}
