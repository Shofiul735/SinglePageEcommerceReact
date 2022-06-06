import classes from './SizeButton.module.scss';

const SizeButton = (props) => {
    const classNames = [classes['size-button']];

    if(props.active){
        classNames.push(classes['active']);
    }
    return <button className={classNames.join(' ')} onClick={props.onClick} disabled={props.disabled}>
        {props.size}
    </button>
}
export default SizeButton;