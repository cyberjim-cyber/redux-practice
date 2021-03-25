import { createStore } from "redux";
import { cameraReducer } from "../CartReducer/CartReducer";

export  const store=createStore(cameraReducer)