import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopList";

function AppContent() {
  const shopList = useSelector((state) => state.shop.shopList);
  const filterStatus = useSelector((state) => state.shop.filterStatus);

  const sortedShopList = [...shopList];
  sortedShopList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filterShopList = sortedShopList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.area === filterStatus;
  });

  return (
    <div>
      {filterShopList.length > 0
        ? filterShopList.map((shop) => <ShopItem key={shop.id} shop={shop} />)
        : "No shop"}
    </div>
  );
}

export default AppContent;
