import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import { populateData } from "./store/gallery";
import { populateProductInfo } from "./store/productInfo";

import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

import './App.css';

const App = (props) => {
    const dispatch = useDispatch();

    if(window.innerWidth < 550){
        return (<div className="mobile">
            <p>
                Please use a laptop or desktop to view the webpage!, this page is not for mobile user.
            </p>
        </div>);
    }

    useEffect(() => {
        fetch(
            "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
        )
            .then((response) => response.json())
            .then((data) => {
                const productData = {
                    title: data.title,
                    price: {
                        new: data.price.discounted,
                        old: data.price.old,
                        totalDiscount:
                            (Math.abs(data.price.discounted - data.price.old) /
                                data.price.old) *
                            100,
                    },
                    colors: data.variation.props[0].values,
                    sizes: data.variation.props[1].values,
                    skus: data.variation.skus,
                };

                const galleryData = {
                    images: data.gallery,
                    displayLink: data.gallery[0].url,
                };

                dispatch(populateProductInfo(productData));
                dispatch(populateData(galleryData));
            });
    }, []);

    return (
        <Fragment>
            <Header />
            <MainPage />
        </Fragment>
    );
};

export default App;
