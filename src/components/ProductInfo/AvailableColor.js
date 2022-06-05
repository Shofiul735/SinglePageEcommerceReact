import classes from './AvailableColor.module.scss';

const AvailableColor = (props) => {
    return (
        <button className={classes['color-button']} onClick={props.onClick}>
            <img src={props.src} className={classes['color-img']} alt="thumb"/>
        </button>
    );
}
export default AvailableColor;