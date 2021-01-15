import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://m.media-amazon.com/images/G/01/DeveloperBlogs/AppstoreBlogs/FireTV/0530-Roseherobanner-static._CB477929436_.png?t=true" />
                <div className="product__row">

                    <Product title="Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model)"
                             price={22.99} 
                             image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrrCxeSrsZScWvDg0mW17Qt8YQYfBe-3O4Wg&usqp=CAU'
                             rating={5}
                     />

                    <Product   title="We're signing into Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model)  "
                             price={21.99} 
                             image='https://images.philips.com/is/image/PhilipsConsumer/HP8230_00-IMS-en_PK?&wid=254&hei=254&$jpglarge$'
                             rating={4}
                    
                    />
                   
                    

                </div>
                <div className="product__row">
                    <Product title="Washing Machine Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model) "
                             price={100.99} 
                             image='https://pakref.com/wp-content/uploads/2020/01/lg-18-kg-front-loading-fully-automatic-washing-machine-price-in-pakistan.png'
                             rating={5}
                    />
                    <Product title="MicroWave Oven Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model) "
                             price={50.99} 
                             image='data:image/jpeg;base64,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'
                             rating={4}
                    />
                    <Product title="hp Laptop Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model)"
                             price={250.99} 
                             image='https://images-na.ssl-images-amazon.com/images/I/71BFWj3oHoL.jpg'
                             rating={4}
                    />
                </div>
                <div className="product__row">
                    <Product title="Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32N4200 (Black) (2019 model)"
                             price={22.99} 
                             image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrrCxeSrsZScWvDg0mW17Qt8YQYfBe-3O4Wg&usqp=CAU'
                             rating={5}
                     />
    
            
                </div>
            </div>
        </div>
    )
}

export default Home
