import classes from './GalleryControlBar.module.scss';

const GalleryControlBar = (props) => {
    return <button className={classes.controlBar} onClick={props.click}>
        <img src={props.src} alt='thumb'/>
    </button>
}

export default GalleryControlBar;