import React from 'react';
import blogo from '../image/brandlogo_w.png'

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <div class="main-visual"></div> 
                <h1>Taguchi</h1>
                <img src={blogo} alt='' />
                <p>est. 2021</p>
            </div>         
                                            
        );
    }
}

export default Header;