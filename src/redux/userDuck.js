//Acá van las constantes

let initialData = {
    loggedIn: false
}
let LOGIN = 'LOGIN'
//Acá va el reducer
export default function reducer(state = initialData, action) {
    switch(action.type){
        case LOGIN:
        default:
            return state;

    }
}

//Acá van los actions