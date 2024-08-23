import {Outlet} from "react-router-dom";
import {FC, ReactNode} from "react";
import Topbar from "./Topbar/Topbar.tsx";
import styles from "./Layout.module.css";

const Layout: FC = () => {
    return(
        <div className="layout">
            <Topbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Layout;
