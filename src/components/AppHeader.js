import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import ShopModal from "./ShopModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../reducer/TodoReducer";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.shop.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button
        variant="primary"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {" "}
        ADD shop
      </Button>
      <div>
        {" "}
        <SelectButton
          style={{ marginRight: "8px" }}
          id="area"
          onChange={updateFilter}
          value={filterStatus}
        >
          <option value="all">Fliter Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Nashik">Chemist</option>
          <option value="StationeryShop">Stationery shop</option>
        </SelectButton>
        <SelectButton id="area" onChange={updateFilter} value={filterStatus}>
          <option value="all">Fliter Area</option>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="MumbaiSuburban">Mumbai Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
        </SelectButton>
        <ShopModal
          type="add"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}

export default AppHeader;
