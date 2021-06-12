import React from 'react';
import blogo from '../image/brandlogo_w.png'

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <nav className='footA'>
                    <ul>                   
                        <li>CONTACT</li>
                        <li>SHOPS</li>
                        <li>ONLINE SHOP</li>
                        <li>COMPANY</li>
                        <li>SITE MAP</li>
                    </ul>
                </nav>
                <div className='footB'>
                    <div className='footLogo'>                       
                        <img src={blogo} alt="" />
                        <p>Taguchi</p>
                    </div>
                </div>
                <div className="footC">   
                    <nav className="sns">
                        <ul>
                            <li><a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a></li>
                            <li>
                                <a href="https://twitter.com/"><span className="fa fa-twitter"></span></a>
                            </li>
                        </ul>
                    </nav>               
                    <p>Follow Us !!</p>
                </div> 
                <nav className="footD">
                    <ul>
                        <li>プライバシーポリシー</li>
                        <li>特定商取引法に基づく表記</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Footer;