import react from 'react';

const Main = () =>{
    return(
        <main>
            <section className='main-hero'>
                <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant,
                focused o traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
                </div>
                <div className='restauranfood'>
                    <img src='./restauranfood.jpg' alt='Picture of a restauran dish' />
                </div>
            </section>
            <section className='highlights'>
                <div className='title-button-container'>
                    <h1>This Weeks Specials!</h1>
                    <button className='onlinemenubutton'>Online Menu</button>
                </div>
                <div className='list'>
                    <ul className='listitems'>
                        <li className='special-item'>
                            <img src='./greeksalad.jpg' alt='Picture of a greek salad'/>
                            <div className='name-price-container'>
                            <h3>Greek Salad</h3>
                            <p>$12.99</p>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                                style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                                <button className='listbutton'>Order a delivery</button>
                        </li>
                        <li className='special-item'>
                            <img src='./Bruchetta.png' alt='Picture of a bruchetta'/>
                            <div className='name-price-container'>
                            <h3>Bruchetta</h3>
                            <p>$5.99</p>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with
                                garlic and seasoned with salt and olive oil. </p>
                                <button className='listbutton'>Order a delivery</button></li>
                        <li className='special-item'>
                            <img src='./lemondessert.jpg' alt='Picture of a lemon dessert'/>
                            <div className='name-price-container'>
                            <h3>Lemon Dessert</h3>
                            <p>$5.00</p>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been
                                sourced and is as authentic as can be imagined. </p>
                                <button className='listbutton'>Order a delivery</button></li>
                    </ul>
                </div>
            </section>
            <section className='Testimonials'>
                <div className='title'><h1>Testimonials</h1></div>
                <div className='testimonialslist'>
                    <ul className='testimonials-item'>
                        <li className='person'>
                            <h1>"A Hidden Gem!"</h1>
                            <p>"Little Lemon offers an unforgettable Mediterranean dining experience!
                                The flavors are authentic, the ambiance is warm, and the service is top-notch.
                                A must-visit in Chicago!" — Sarah Thompson </p>
                            <img src='' alt='foto persona'/>
                        </li>
                        <li className='person'>
                            <h1>"Exceptional Flavor!"</h1>
                            <p>"The Greek Salad and Lemon Dessert are out of this world! Every bite feels like a taste of home.
                                I always look forward to my visits!" — John Davis</p>
                            <img src='' alt='foto persona'/>
                        </li>
                        <li className='person'>
                            <h1>"Perfect for Any Occasion!"</h1>
                            <p>"Whether it's a casual meal or a special night out, Little Lemon never disappoints.
                                The food is fresh, the staff is friendly, and the atmosphere is always inviting!" — Emily Roberts</p>
                            <img src='' alt='foto persona'/>
                        </li>
                        <li className='person'>
                            <h1>"Unforgettable Experience!"</h1>
                            <p>"I’ve visited Little Lemon multiple times, and each meal is better than the last.
                                the dishes are packed with flavor, and the atmosphere makes
                                every visit feel special." — Mark Lewis </p>
                            <img src='' alt='foto persona'/>
                        </li>
                        <li className='person'>
                            <h1>"A Taste of Home!"</h1>
                            <p>"As a Mediterranean food lover, I can say Little Lemon has the best authentic dishes
                                 I’ve ever had in Chicago. It’s like dining with family!" — Olivia Martinez </p>
                            <img src='' alt='foto persona'/>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='About'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>At Little Lemon, we bring the best of Mediterranean flavors to Chicago with a
                    menu inspired by traditional recipes and fresh, high-quality ingredients.
                    Our family-owned restaurant offers a warm, inviting atmosphere where you can
                    enjoy delicious dishes made with love. From our famous Greek Salad to our homemade lemon dessert,
                    every meal is a celebration of flavor and tradition. Join us and experience the taste of the Mediterranean!</p>
                <div><img src='' alt='Picture of the restaurant'/></div>
                <div><img src=''alt='other picture of the restaurant'/></div>
                </div>
            </section>
        </main>
    );
};

export default Main;