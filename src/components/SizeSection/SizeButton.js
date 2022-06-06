import classes from './SizeButton.module.scss';

const SizeButton = (props) => {
    return <button className={classes['size-button']} onClick={props.onClick} disabled={props.disabled}>
        {props.size}
    </button>
}
export default SizeButton;