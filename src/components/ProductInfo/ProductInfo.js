import { useSelector } from 'react-redux';

import classes from './ProductInfo.module.scss';

const ProductInfo = (props) => {

    let title = useSelector((state)=>state.product.title);
    title = title.split('&#39;').join("'");

    return <div className={classes['product-info']}>
        <p className={classes['title']}>{title}</p>
        
    </div>
}

export default ProductInfo;