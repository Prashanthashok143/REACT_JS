import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const GetTodo=createAsyncThunk("Counter/GetTodo",async()=>{
const response=await axios.get("http://localhost:30011/todo")
return response.data;
})

const CounterData=createSlice({
  name: "Counter",
  initialState:{ Counter: 0,
  todos:[],
error:null,
loading:null,
 },
  reducers: {
    increment: (state) => {
      state.Counter += 1;
    },
    decrement: (state) => {
      state.Counter -= 1;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(GetTodo.pending,(state)=>{
state.error=null;
state.todos=[]
state.loading=true;
 }).addCase(GetTodo.fulfilled,(state,action)=>{
  state.error=null;
  state.todos=action.payload;
  state.loading=false;
 }).addCase(GetTodo.rejected,(state,action)=>{
  state.error=action.error.message;
  state.todos=[];
  state.loading=true;

 })
  }
});

export const {increment,decrement}=CounterData.actions;
export default CounterData.reducer;