import { Link, Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/counter"}>Counter</Link>
            </li>
            <li>
              <Link to={"/counterFn"}>CounterFn</Link>
            </li>
            <li>
              <Link to={"/colorpicker"}>ColorPicker</Link>
            </li>
            <li>
              <Link to={"/form"}>Form</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
