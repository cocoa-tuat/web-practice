import React from 'react';

class Product extends React.Component {
    render() {
        return(
            <div className='product'>
                <div className='product-list'>
                    <img
                        className='product-image'
                        src= {this.props.image}
                        alt= ''
                    />
                    <p className='product-name'>{this.props.name}</p>
                </div>         
            </div>
        )
    }
}

export default Product;