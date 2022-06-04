import { Fragment } from "react";

import Header from "./components/Header/Header";
import MainPage from './components/MainPage/MainPage';

const App = (props) => {
    fetch(
        "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
    )
        .then((response) => response.json())
        .then((data) => console.dir(data));

    return (
        <Fragment>
            <Header />
            <MainPage />
        </Fragment>
    );
};

export default App;
