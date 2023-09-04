'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import bgImage from 'src/assets/images/intro_bg.jpg';
import logoImage from '../../assets/images/image2.png'


export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [tuOpen, setTuOpen] = useState(false);
    const openMenu = () => {
        setTuOpen(true);
    };

    const closeMenu = () => {
        setTuOpen(false);
    };

    const card={ price: "$100", 
    name: "Zebronics head phone", 
    description: "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty." };

    const classes = ['#E44', '#3C81F6', '#000'];
    const divElements = classes.map((color, index) => {
        const divStyle = {backgroundColor: color};
        return <div key={index} style={divStyle}></div>;
    });

    return (
        <div className={styles.wrapper}>
            <nav id='b_menu' className={styles.menu}>
                <ul id='menu' className={styles.menu_ul}>
                    <li className={styles.burger_popup}>
                        <a onClick={openMenu} href='#footer' className={styles.hover}>
                        open the product card
                        </a>
                        {tuOpen && (
                            <div className={styles.rectangle} >
                                <div className={styles.image2} style={{ backgroundImage: `url(${logoImage.src})` }}></div>
                                    <p className={styles.price}>{card.price}</p>
                                    <p className={styles.name_product}>{card.name}</p>
                                    <p className={styles.product_property}>{card.description}</p>
                                    <p className={styles.you_color}>Choose your colour</p>
                                    <div className={styles.test}>{divElements}</div>
                                    <button className={styles.add_cart}>Add to cart</button>
                                    <button className={styles.buy_now}>Buy now</button>
                                    <a href='#footer' className={styles.reviews}>Read reviews</a>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
