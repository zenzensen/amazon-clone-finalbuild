import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg" alt=""
                />
                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The Lean Startup"
                    price={299.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={3}
                    />
                    <Product 
                    id='696969'
                    title="Sony Playstation 5"
                    price={49990.0}
                    image="https://i.gadgets360cdn.com/products/large/sony-ps5-649x800-1592631239.jpeg"
                    rating={5}
                    />

                    <Product 
                    id="43211234"
                    title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Blue)"
                    price={3999.99}
                    image="https://cdn.shopify.com/s/files/1/1919/9641/articles/u_10216168_2048x2048.jpg?v=1610773700"
                    rating={5}/>
                </div>
                
                <div className="home__row">
                    <Product 
                    id="56788765"
                    title="SAMSUNG 27-inch Odyssey G7 - QHD 1000R Curved Gaming Monitor"
                    price={52000.00}
                    image="https://images.samsung.com/is/image/samsung/in-gaming-monitor-c32g75tqsw-lc27g75tqswxxl-frontblack-335280244?$720_576_PNG$"
                    rating={4}/>

                    <Product 
                    id="98765432"
                    title="OnePlus Bullets Wireless Z Bass Edition (Bold Black)"
                    price={1999.99}
                    image="https://m.media-amazon.com/images/I/51R4FJdgbMS._SL1500_.jpg"
                    rating={4}/>
                </div>
                
                <div className="home__row">
                <Product 
                    id="10101010"
                    title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                    price={50999.99}
                    image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL480_QL65_.jpg"
                    rating={4}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
