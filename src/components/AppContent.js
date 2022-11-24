import React from "react";
import { useSelector } from "react-redux";
import ShopItem from './ShopList'

function AppContent() {
  const shopList = useSelector((state) => state.shop.shopList);

  const sortedShopList = [...shopList];
  sortedShopList.sort((a, b) => new Date(b.time) - new Date(a.time));

  console.log(shopList);

  return (
    <div>
      {sortedShopList.length > 0 ?
      sortedShopList.map((shop)=> <ShopItem key={shop.id} shop={shop} /> )
      :
      "No shop"}

      
      
    </div>
  );
}

export default AppContent;
