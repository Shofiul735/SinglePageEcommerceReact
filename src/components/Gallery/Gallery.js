import { useDispatch,useSelector } from "react-redux";

import classes from "./Gallery.module.scss";

const Gallery = (props) => {
    const dispatch = useDispatch();
    const imageLink = useSelector(state => state.gallery.displayImageLink);
    const images = useSelector(state => state.gallery.images);

    return (
        <div className={classes.gallery}>
            <div className={classes['image-section']}>
                <img src={imageLink} alt="product-image"/>
            </div>
        </div>
    );
};
export default Gallery;
