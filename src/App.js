import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader.js";
import styles from "./styles/modules/app.module.scss";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster 
      position="top-right"
      toastOptions={
       { style:{
        fontSize:'1.5rem'
       }}
      }
      />
      <div className="container">
        <PageTitle>Shop List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent></AppContent>
        </div>
      </div>
    </>
  );
}

export default App;
