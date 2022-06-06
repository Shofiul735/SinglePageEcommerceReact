import { useSelector } from "react-redux";

import SizeButton from "./SizeButton";

import classes from "./SizeSection.module.scss";

const SizeSection = (props) => {
    const sizes = useSelector((state) => state.product.sizes);
    const availability = useSelector((state) => state.product.availability);
    const skus = useSelector((state) => state.product.skus);

    const sizeButtons = sizes.map((item) => {
        return (
            <SizeButton
                key={item.id}
                size={item.name}
                disabled={availability[item.id] === true ? false : true}
            />
        );
    });

    return (
        <div className={classes["size-section"]}>
            <p>
                Size: <span>{5}</span>
            </p>
            <div className={classes["size-variety"]}>{sizeButtons}</div>
        </div>
    );
};

export default SizeSection;
