import react from 'react';


function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src='./Logo.png' alt="Little Lemon Logo" />
                </div>

                <div className="footer-links">
                    <h3>Little Lemon</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>

                <div className='contact-info'>
                    <h3>Contact information</h3>
                    <ul>
                        <li>Phone number: </li>
                        <li>Email:<a href="mailto:contact@littlelemon.com">contact@littleleom.com</a></li>
                        <li>Address:</li>
                    </ul>
                </div>

                <div className='social-media'>
                    <h3>Our Social Media</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>

                </div>



            </div>
        </footer>
    );
}

export default Footer;