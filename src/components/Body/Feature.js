import React from 'react';

class Feature extends React.Component {
    render() {
        return(
            <div className='feature'>
                <div className='feature-num'>
                    <h2>{this.props.num}</h2>
                </div>
                <div className='feature-value'>
                    <h3>{this.props.value}</h3>
                </div>
                <img
                    className='feature-image'
                    src= {this.props.image}
                    alt= 'img'
                />     
            </div>
        )
    }
}

export default Feature;
