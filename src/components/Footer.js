import React from 'react';
import { useHistory } from 'react-router-dom';


const Footer = () =>{

    const history = useHistory();

    return  <div class="footer-dark">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a rel="noreferrer" onClick={()=> history.push('/rooms') } >Rooms Booking</a></li>
                        <li><a rel="noreferrer" onClick={()=> history.push('/packages') } >Packages</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>

                        <li><a rel="noreferrer" onClick={()=> history.push('/contact') }>Contact</a></li>
                        <li><a rel="noreferrer" onClick={()=> history.push('/about') }>About</a></li>
                        <li><a rel="noreferrer" onClick={()=> history.push('/login') }>Login</a></li>
                        {/* <li><a rel="noreferrer" onClick={()=> history.push('') }>Careers</a></li> */}
                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>Ganga Radisson</h3>
                    <p>Book the best rooms available in south east region.</p>
                </div>
                <div class="col item social"><a rel="noreferrer"  href="www.demolink.com"><i class="social-icon ion-social-facebook"></i></a><a rel="noreferrer"  href="www.demolink.com"><i class="social-icon ion-social-twitter"></i></a><a rel="noreferrer"  href="www.demolink.com"><i class="social-icon ion-social-snapchat"></i></a><a rel="noreferrer"  href="www.demolink.com"><i class="social-icon ion-social-instagram"></i></a></div>
            </div>
            <p class="copyright">Ganga Radisson © 2023 Algoxperts Technologies</p>
        </div>
    </footer>
</div>
}

export default Footer;