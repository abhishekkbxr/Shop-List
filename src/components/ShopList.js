import React, { useState } from "react";
import styles from "../styles/modules/shopItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteShop } from "../reducer/TodoReducer";
import toast from "react-hot-toast";
import ShopModal from "./ShopModal";

function ShopList({ shop }) {
  const dispatch = useDispatch();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteShop(shop.id));
    toast.success("Delete succfully");
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                shop.status === "complete" && styles["todoText--completed"],
              ])}
            >
              <span className={styles.spanTitle}>Name:&nbsp;</span> {shop.name}
            </p>
            <p
              className={getClasses([
                styles.todoText,
                shop.status === "complete" && styles["todoText--completed"],
              ])}
            >
              <span className={styles.spanTitle}>Area:&nbsp;</span>
              {shop.area}
            </p>
            <p
              className={getClasses([
                styles.todoText,
                shop.status === "complete" && styles["todoText--completed"],
              ])}
            >
              <span className={styles.spanTitle}>Category:&nbsp;</span>
              {shop.category}
            </p>
            <p className={styles.time}>
              <span className={styles.spanTitle}>Start Date:&nbsp;</span>{" "}
              {shop.startDate}
            </p>
            <p className={styles.time}>
              <span className={styles.spanTitle}>Start Date:&nbsp;</span>{" "}
              {shop.endDate}
            </p>
            {/* <p className={styles.time}>
              {format(new Date(2014, 1, 11), "MM/dd/yyyy")}
            </p> */}
          </div>
        </div>

        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <ShopModal
        shop={shop}
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default ShopList;
