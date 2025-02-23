import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        veg: [
            {image:"/p3.jpg", name: "tomato", price: 70.4 },
            {image:"/p5.webp", name: "potato", price: 50.3 },
            {image:"/p6.webp", name: "chilli", price: 45.3 },
            {image:"/be.avif", name: "Beans", price: 120.6 },
            {image:"/p7.webp", name: "onions", price: 70.0 },
            {image:"/cp.jpg", name: "Capsicum", price: 90.5 },
            {image:"/beetroot.webp", name: "Beetroot", price: 140.5 },
            {image:"/cr.webp", name: "Carrot", price: 110.0 },
            {image:"/bagg.webp", name: "Brinjal", price: 80.7 },
            {image:"/lfd.webp", name: "Ladies-finger", price: 74.0 },
            {image:"/rd.jpg", name: "Radish", price: 50.0 },
            {image:"/lmn.webp", name: "lemon", price: 100.0 },
            {image:"/pes.jpg", name: "peas", price: 130.0 },
            {image:"/cbg.jpg", name: "cabbage", price: 50.0 },
        ],
        nonVeg: [
            {image:"/p2.jpg", name: "chicken", price: 350.0 },
            {image:"/pr.jpg", name: "prawns", price: 450.0 },
            {image:"/p1.png", name: "mutton", price: 800.0 },
            {image:"/bf.webp", name: "beef", price: 500.0 },
            {image:"/p1.avif", name: "fish", price: 250.0 },
            {image:"/cra.jpg", name: "crab", price: 550.0 },
            {image:"/egg.jpg", name: "Eggs", price: 150.0 },
            {image:"/Mbt.webp", name: "Mutton Boti Tikka", price: 900.0 },
            {image:"/clp.jpg", name: "Chicken Leg pieces", price: 300.0 },
            
        ],
        fruits: [
            {image:"ap.jpg",name: "Apples", price: 100.0 },
            {image:"b.jpg",name: "Banana", price: 170.0 },
            {image:"or.webp",name: "Oranges", price: 85.0 },
            {image:"g.jpeg",name: "Guava", price: 80.0 },
            {image:"ki.jpg",name: "Kiwi", price: 100.0 },
            {image:"/pgs.avif",name:"pomegranate", price: 324.0 },
            {image:"/gp.jpg",name: "grapes", price: 250.0 },
            {image:"/pp.jpg",name: "papaya", price: 115.0 },
            {image:"/str.jpg", name: "Strawberry", price: 200.0 },
            {image:"/pa.jpg", name: "PineApple", price: 250.0 },
            {image:"/mk.jpg", name: "MuskMelon", price: 180.0 },
            {image:"/wm.webp", name: "Water Melon", price: 70.0 },
            {image:"/mg.webp", name: "Mango", price: 150.0 },
            {image:"/av.webp",name:"Avacado",price:170.5}
        ],
        leafyVegetables:[
            {image:"cf.webp",name:"cauliflower", price:100.0},
            {image:"sp.jpeg",name:"Spinach", price:150.0},
            {image:"cr.jpeg",name:"Coriander Leaves",price:20.00},
            {image:"mi.webp",name:"mint Leaves",price:30.00},
            {image:"p5.jpeg",name:"Curry Leaves",price:30.00},
            {image:"/fg.webp", name: "FenuGreek(methi)", price: 250.0 },
            {image:"so.webp", name: "Spring Onion", price: 250.0 },
            {image:"le.avif",name:"Lettuce",price:"180"},
            {image:"br.avif", name: "Broccoli", price: 120.0 },
            {image:"bs.jpg", name: "Basella", price: 30.0 },
            {image:"mu.webp", name: "Mustard Greens", price: 80.9 },
            {image:"dr.jpg", name: "Moringa (Drumstick Leaves)", price: 120.0 },
        ],
    },
    reducers: {},
});
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
        const item=state.find((item)=>item.name === action.payload.name)
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        increment:(state,action)=>{
            const item=state.find(item=>item.name === action.payload.name)
            if(item){
                item.quantity +=1;
            }
        },
        decrement:(state,action)=>{
            const item=state.find(item=>item.name === action.payload.name)
            if(item && item.quantity>1){
                item.quantity -=1;
            }
            else{
                return state.filter(item=>item.name !== action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item=>item.name !== action.payload.name);
        },
        clearcart:()=>[],

    },
})
const purchaseSlice = createSlice({
    name: "purchase",
    initialState: [],
    reducers: {
      purchaseDetails: (state, action) => {
        state.push({ ...action.payload }); 
      },
    },
  });
 const authSlice=createSlice(
    {
        name:"auth",
        initialState:{

            isAuthenticated:localStorage.getItem("username")?
            true:false,
            user:localStorage.getItem("username")||"",
        },
        reducers:{
            login:(state,action)=>{
                state.isAuthenticated=true;
                state.user=action.payload;
                localStorage.setItem("username",action.payload);

            },
            logout:(state,action)=>{
                state.isAuthenticated=false,
                state.user="",
                localStorage.removeItem("username");
            }
        }
    }
 )
const store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchase:purchaseSlice.reducer,
        auth:authSlice.reducer

    }
})
export default store;
export const {addtoCart,increment,decrement,remove,clearcart}=cartSlice.actions;
export const {purchaseDetails}=purchaseSlice.actions;
export const{login,logout}=authSlice.actions;
