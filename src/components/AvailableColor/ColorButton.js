import classes from './ColorButton.module.scss';

const AvailableColor = (props) => {
    const className = [classes['color-button']];

    if(props.active){
        className.push(classes['active'])
    }
    
    return (
        <button className={className.join(' ')} onClick={props.onClick}>
            <img src={props.src} className={classes['color-img']} alt="thumb"/>
        </button>
    );
}
export default AvailableColor;