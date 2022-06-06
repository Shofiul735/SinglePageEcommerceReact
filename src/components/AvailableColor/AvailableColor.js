import classes from './AvailableColor.module.scss';

const AvailableColor = (props) => {
    const className = [classes['color-button']];

    if(props.active){
        className.push(classes['active'])
    }
    
    return (
        <button disabled={!props.isAvailable} className={className.join(' ')} onClick={props.onClick}>
            <img src={props.src} className={classes['color-img']} alt="thumb"/>
        </button>
    );
}
export default AvailableColor;