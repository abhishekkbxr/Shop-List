import { createSlice } from "@reduxjs/toolkit";

const getInitialShopList = () => {
  const localShopList = window.localStorage.getItem("shopList");
  if (localShopList) {
    return JSON.parse(localShopList);
  }else{
    window.localStorage.setItem("shopList" , JSON.stringify([]))
  }
  return [];
};

const initalValue = {
  shopList: getInitialShopList(),
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: initalValue,
  reducers: {
    addShop: (state, action) => {
      state.shopList.push(action.payload);
      const shopList = window.localStorage.getItem("shopList");
      if (shopList) {
        const shopListArr = JSON.parse(shopList);
        shopListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("shopList", JSON.stringify(shopListArr));
      } else {
        window.localStorage.setItem(
          "shopList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    deleteShop:(state , action) =>{
      const shopList = window.localStorage.getItem("shopList");
      if(shopList){
        const shopListArr = JSON.parse(shopList);
        shopListArr.forEach((shop , index) => {
          if(shop.id === action.payload){
            shopListArr.splice(index ,1);
          }
        });
        window.localStorage.setItem("shopList" ,JSON.stringify(shopListArr));
        state.shopList = shopListArr;
      }
    },

    updateShop:(state , action) =>{
      const shopList = window.localStorage.getItem("shopList");
      if(shopList){
        const shopListArr = JSON.parse(shopList);
        shopListArr.forEach((shop , index)=>{
          if(shop.id === action.payload.id){
            shop.name = action.payload.name;
            shop.area = action.payload.area;
            shop.category = action.payload.category;
          }
        });
        window.localStorage.setItem("shopList" ,JSON.stringify(shopListArr));
        state.shopList = shopListArr;
      }
    }
  },
});

export const {addShop , deleteShop ,updateShop} = shopSlice.actions;
export default shopSlice.reducer;
