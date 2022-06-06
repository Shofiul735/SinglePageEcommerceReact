import { useSelector,useDispatch } from "react-redux";

import SizeButton from "./SizeButton";

import { updateSelectedSize, updatePrice } from "../../store/productInfo";

import classes from "./SizeSection.module.scss";

const SizeSection = (props) => {
    const dispatch = useDispatch();
    const sizes = useSelector((state) => state.product.sizes);
    const availability = useSelector((state) => state.product.availability);
    const skus = useSelector((state) => state.product.skus);
    const colorId = useSelector((state) => state.product.selectedColor.id);
    const selectedSize = useSelector((state) => state.product.selectedSize);

    const sizeSelectionHandler = (index) => {
        if(colorId === 0){
            alert('Please select a color first!');
            return;
        }
        const selectedSize = {
            id: sizes[index].id,
            name: sizes[index].name,
            index: index,
        };
        const newPrice = skus.find(
            (item) =>
                item.props[0] === colorId && item.props[1] === selectedSize.id
        );
        const displayPrice = {
            new: newPrice.price.discounted,
            old: newPrice.price.old,
        }
        dispatch(updateSelectedSize(selectedSize));
        dispatch(updatePrice(displayPrice));
    };

    const sizeButtons = sizes.map((item, index) => {
        return (
            <SizeButton
                key={index}
                size={item.name}
                active= {index === selectedSize.index}
                onClick={() => sizeSelectionHandler(index)}
                disabled={availability[item.id] === true ? false : true}
            />
        );
    });

    return (
        <div className={classes["size-section"]}>
            <p>
                Size: <span>{selectedSize.name}</span>
            </p>
            <div className={classes["size-variety"]}>{sizeButtons}</div>
        </div>
    );
};

export default SizeSection;
