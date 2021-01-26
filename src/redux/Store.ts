import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics";
import rootReducer from './reducers'
    
const epicMiddleware = createEpicMiddleware()

const Store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)

export type StoreType = ReturnType<typeof rootReducer>;
export default Store;