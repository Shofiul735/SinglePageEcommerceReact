import { useSelector, useDispatch } from "react-redux";

import AvailableColors from "../AvailableColor/AvailableColors";

import classes from "./ProductInfo.module.scss";

const ProductInfo = (props) => {
    let title = useSelector((state) => state.product.title);
    const price = useSelector((state) => state.product.price);

    title = title.split("&#39;").join("'");


    return (
        <div className={classes["product-info"]}>
            <p className={classes["title"]}>{title}</p>
            <div className={classes["price-section"]}>
                <h4>Price:</h4>
                <h2 className={classes["new-price"]}> Rs.{price.new}</h2>
                <h2 className={classes["old-price"]}> Rs.{price.old}</h2>
                <h2 className={classes.discount}>
                    ({price.totalDiscount.toFixed(2)}% OFF)
                </h2>
            </div>
            <AvailableColors />
        </div>
    );
};

export default ProductInfo;
