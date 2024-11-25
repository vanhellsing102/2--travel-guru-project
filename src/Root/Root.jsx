import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="px-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;