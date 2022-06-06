import { useSelector, useDispatch } from "react-redux";

import AvailableColors from "../AvailableColor/AvailableColors";
import PriceSection from "../PriceSection/PriceSection.";

import classes from "./ProductInfo.module.scss";

const ProductInfo = (props) => {
    let title = useSelector((state) => state.product.title);

    title = title.split("&#39;").join("'");


    return (
        <div className={classes["product-info"]}>
            <p className={classes["title"]}>{title}</p>
            <PriceSection />
            <AvailableColors />
        </div>
    );
};

export default ProductInfo;
