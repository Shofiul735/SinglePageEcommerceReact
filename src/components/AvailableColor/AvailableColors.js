import { useSelector, useDispatch } from "react-redux";

import { replaceDisplayImage } from "../../store/gallery";
import { updateSelectedColor } from "../../store/productInfo";

import ColorButton from "./ColorButton";

import classes from "./AvailableColors.module.scss";

const AvailableColors = (props) => {
    const dispatch = useDispatch();

    const colors = useSelector((state) => state.product.colors);
    const selectedColor = useSelector((state) => state.product.selectedColor);

    const colorHandler = (index) => {
        const newColor = {
            name: colors[index].name,
            index: index,
            id: colors[index].id,
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
        return (
            <ColorButton
                active={selectedColor.index === index}
                key={index}
                src={item.thumb}
                onClick={() => colorHandler(index)}
            />
        );
    });

    return (
        <div className={classes["color-section"]}>
            <p>
                Color: <span>{selectedColor.name}</span>
            </p>
            <div className={classes["color-variety"]}>{colorsButton}</div>
        </div>
    );
};


export default AvailableColors;
