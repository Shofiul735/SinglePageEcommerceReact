import { useSelector } from "react-redux";

import classes from './PriceSection.module.scss';

const PriceSection = (props) => {
    const price = useSelector((state) => state.product.price);

    return (
        <div className={classes["price-section"]}>
            <h4>Price:</h4>
            <h2 className={classes["new-price"]}> Rs.{price.new}</h2>
            <h2 className={classes["old-price"]}> Rs.{price.old}</h2>
            <h2 className={classes.discount}>
                ({price.totalDiscount.toFixed(0)}% OFF)
            </h2>
        </div>
    );
};

export default PriceSection;
