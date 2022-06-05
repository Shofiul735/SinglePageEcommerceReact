import { useSelector, useDispatch } from "react-redux";

import AvailableColorButton from "./AvailableColor";

import { replaceDisplayImage } from "../../store/gallery";
import { updateSelectedColor } from "../../store/productInfo";

import classes from "./ProductInfo.module.scss";

const ProductInfo = (props) => {
    const dispatch = useDispatch();

    let title = useSelector((state) => state.product.title);
    const price = useSelector((state) => state.product.price);
    const colors = useSelector((state) => state.product.colors);
    const availability = useSelector((state) => state.product.availability);
    const selectedColor = useSelector((state) => state.product.selectedColor);

    title = title.split("&#39;").join("'");

    const colorHandler = (index) => {
        const newColor = {
            name: colors[index].name,
            index: index,
        };

        dispatch(
            replaceDisplayImage({
                type: "color",
                url: colors[index].image,
            })
        );

        dispatch(updateSelectedColor(newColor));
    };

    const colorsButton = colors.map((item, index) => {
        if (availability.indicator === "color") {
            return (
                <AvailableColorButton
                    active={selectedColor.index === index}
                    key={index}
                    isAvailable={availability.avaiable[index]}
                    src={item.thumb}
                    onClick={() => colorHandler(index)}
                />
            );
        } else {
            return (
                <AvailableColorButton
                    active={selectedColor.index === index}
                    key={index}
                    isAvailable={true}
                    src={item.thumb}
                    onClick={() => colorHandler(index)}
                />
            );
        }
    });

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
            <div className={classes["color-section"]}>
                <p>
                    Color: <span>{selectedColor.name}</span>
                </p>
                <div className={classes["color-variety"]}>{colorsButton}</div>
            </div>
        </div>
    );
};

export default ProductInfo;
