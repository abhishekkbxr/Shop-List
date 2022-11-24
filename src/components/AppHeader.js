import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import ShopModal from "./ShopModal";

function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    // const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
    // const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
    // const dispatch = useDispatch();
    return (
        <div className={styles.appHeader}>
            <Button variant="primary" onClick={()=>{setModalOpen(true)}}> ADD shop</Button>
            <SelectButton
                id="status"
            // onChange={(e) => updateFilter(e)}
            // value={filterStatus}
            >
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Completed</option>
            </SelectButton>
            <ShopModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    );
}

export default AppHeader;
