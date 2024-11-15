import AppBar from "../AppBar/AppBar.jsx";
import {Outlet} from "react-router-dom";


function Layout({children}) {
	return (
			<div>
				<div>
					<AppBar />
					{children}
					<Outlet/>
				</div>
			</div>
	);
}

export default Layout;
