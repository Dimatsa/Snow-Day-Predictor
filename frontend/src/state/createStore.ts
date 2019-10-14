import { createStore as reduxCreateStore } from "redux"
import { GlobalState } from "../types"

const reducer = (state: GlobalState) => state

const createStore = () => reduxCreateStore(reducer)
export default createStore
