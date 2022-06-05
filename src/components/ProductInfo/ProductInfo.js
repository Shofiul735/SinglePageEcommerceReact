import { useSelector } from 'react-redux';

import AvailableColor from './AvailableColor';
import classes from './ProductInfo.module.scss';

const ProductInfo = (props) => {

    let title = useSelector((state) => state.product.title);
    const price = useSelector((state) => state.product.price);
    const colors = useSelector((state) => state.product.colors);
    const availability = useSelector((state) => state.product.availability);

    title = title.split('&#39;').join("'");
    console.log(colors);
    const colorsButton = colors.map((item,index)=>{
        if(availability.indicator === 'color'){
            return <AvailableColor isAvailable={availability.avaiable[index]} src={item.thumb}/>
        }else{
            return <AvailableColor isAvailable={true} src={item.thumb}/>
        }
    })


    return <div className={classes['product-info']}>
        <p className={classes['title']}>{title}</p>
        <div className={classes['price-section']}>
            <h4>Price:</h4>
            <h2 className={classes['new-price']}> Rs.{price.new}</h2>
            <h2 className={classes['old-price']}> Rs.{price.old}</h2>
            <h2 className={classes.discount}> ({price.totalDiscount.toFixed(2)}% OFF)</h2>
        </div>
        <div className={classes['color-section']}>
            <p>Color: <span>Select a color</span></p>
            <div className={classes['color-variety']}>
                {colorsButton}
            </div>
        </div>
    </div>
}

export default ProductInfo;