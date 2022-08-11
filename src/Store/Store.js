import { legacy_createStore as createStore } from "redux";
import { compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleWares
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	thunk,
].filter(Boolean);
const composeEnhancers = compose(applyMiddleware(...middleWares));
//root-Reducer
export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
