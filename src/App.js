import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import { populateData } from "./store/gallery";

import Header from "./components/Header/Header";
import MainPage from './components/MainPage/MainPage';

const App = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(
            "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch(populateData({
                    images: data.gallery,
                    displayLink: data.gallery[0].url,
                }));
                console.log("App.js--21");
            });
    },[]);
    

    return (
        <Fragment>
            <Header />
            <MainPage />
        </Fragment>
    );
};

export default App;
