import { useDispatch, useSelector } from "react-redux";

import GalleryControlBar from "./GalleryControlBar";
import { replaceDisplayImage } from "../../store/gallery";

import classes from "./Gallery.module.scss";

const Gallery = (props) => {
    const dispatch = useDispatch();
    const imageLink = useSelector((state) => state.gallery.displayImageLink);
    const images = useSelector((state) => state.gallery.images);

    const displayImageChangeHandler = (index) => {
        dispatch(replaceDisplayImage(index));
    };

    const galleryControlBar = images.map((item, index) => {
        return (
            <GalleryControlBar
                key={index}
                src={item.thumb}
                click={() => displayImageChangeHandler(index)}
            />
        );
    });

    return (
        <div className={classes.gallery}>
            <div className={classes["image-section"]}>
                <img
                    className={classes["display-image"]}
                    src={imageLink}
                    alt="product-image"
                />
                <div className={classes['gallery-control-section']}>
                    <div className={classes["gallery-controller"]}>
                        {galleryControlBar}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Gallery;
