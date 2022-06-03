import classes from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.box1}>
                <p>Related Categories</p>
            </div>
            <div className={classes.box2}>
                <p>
                    Home > Bags, Wallets... > Bags & Backp... > Laptop Bags >  
                </p>
            </div>
        </header>
    );
}

export default Header;