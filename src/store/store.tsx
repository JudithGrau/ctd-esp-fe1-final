import { configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    //Reducer: 
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;