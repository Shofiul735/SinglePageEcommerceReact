import Gallery from "../Gallery/Gallery";
import ProductInfo from "../ProductInfo/ProductInfo";

import classes from './MainPage.module.scss';

const MainPage = (props) => {
    return <div className={classes['main-page']}>
        <Gallery/>
        <ProductInfo/>
    </div>
}

export default MainPage;