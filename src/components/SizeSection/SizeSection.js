import { useSelector } from "react-redux";

import classes from "./SizeSection.module.scss";

const SizeSection = (props) => {
    const sizes = useSelector((state) => state.product.sizes);
    const availability = useSelector((state) => state.product.availability);
    console.log(sizes);
    console.log(availability);

    return (
        <div className={classes["size-section"]}>
            <p>
                Size: <span>{5}</span>
            </p>
            <div className={classes["size-variety"]}>Hello</div>
        </div>
    );
};

export default SizeSection;
