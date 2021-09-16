import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer  from '../reducer';

//primero seteamos el store
//haciendo nuestro reducer(anda a ../reducer/index.js)

export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

//ahora tenemos que hacer nuestra primer action!
//vamos a actions