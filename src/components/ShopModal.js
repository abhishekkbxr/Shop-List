import React, { useEffect, useState } from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addShop, updateShop } from "../reducer/TodoReducer";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ShopModal({ type, modalOpen, setModalOpen, shop }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");

  // console.log(format(startDate), "startdate");
  // console.log(end ,"Enddate")

  useEffect(() => {
    if (type === "update" && shop) {
      setName(shop.name);
      setArea(shop.area);
      setCategory(shop.category);
    } else {
      setName("");
      setArea("");
      setCategory("");
    }
  }, [type, modalOpen, shop]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && area && category && startDate && endDate) {
      if (type === "add") {
        dispatch(
          addShop({
            id: uuid(),
            name,
            area,
            category,
            time: new Date().toLocaleString(),
            startDate,
            endDate,
          })
        );

        toast.success("Shop Added successfully");
      }
      if (type === "update") {
        if (
          shop.name !== name ||
          shop.area !== area ||
          shop.category !== category
        ) {
          dispatch(
            updateShop({
              ...shop,
              name,
              area,
              category,
              startDate,
              endDate,
            })
          );
          toast.success("Shop Updated successfully");
        } else {
          toast.error(" No changes are made ");
        }
      }
      setModalOpen(false);
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            {" "}
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === "add" ? "Add" : "Update"} Shop
            </h1>
            <label htmlFor="title">
              Name Of Shop
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="type">
              Area Of Shop
              <select
                id="type"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="">Area of shop</option>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="MumbaiSuburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
            </label>

            <label htmlFor="type">
              Category Of Shop
              <select
                id="type"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category of shop</option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Nashik">Chemist</option>
                <option value="StationeryShop">Stationery shop</option>
              </select>
            </label>
            <label htmlFor="title">
              Start Date
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            <label htmlFor="title">
              End Date
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </label>

            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "add" ? "Add Shop" : "Update Shop"}
              </Button>
              <Button
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ShopModal;
