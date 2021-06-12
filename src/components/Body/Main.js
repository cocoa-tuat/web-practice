import React from 'react';
import Feature from './Feature';
import Product from './Product';
import News from './News';
import img1 from '../image/image1.png';
import img2 from '../image/image2.png';
import img3 from '../image/image3.png';
import img4 from '../image/image4.png';
import img5 from '../image/image5.png';
import img6 from '../image/image6.png';
import img7 from '../image/image7.png';
import img8 from '../image/image8.png';
import img9 from '../image/image9.png';


class Main extends React.Component {
    render() {
        const FeatureList = [
            {
              num: "01",
              value: '男性の特有の悩みにこだわった処方',
              image: img1
            },
            {
              num: "02",
              value: '安心と信頼の日本製',
              image: img2
            },
            {
              num: '03',
              value: '体に優しいオーガニック原料を使用',
              image: img3
            }
          ]
        
        const ProductList = [
          {
              image: img4,
              name: 'Hair color'
          },
          {
              image: img5,
              name: 'Hair styling'
          },
          {
              image: img6,
              name: 'Face care'
          },
          {
              image: img7,
              name: 'Shaving'
          },
          {
              image: img8,
              name: 'Body care'
          },
          {
              image: img9,
              name: 'Fragrance'
          }         
        ]

        return (
            <div className = 'Main'>
                <div className = 'Concept'>
                    <h1>OUR BRAND CONCEPT</h1>
                    <p>XXXXXXXXXXXXXXXXXX</p>
                </div>
                <div className= 'Feature'>
                {FeatureList.map((FeatureItem) =>{
                    return(
                    <Feature
                        num = {FeatureItem.num}
                        value = {FeatureItem.value}
                        image = {FeatureItem.image}
                    />
                    );
                    })} 
                </div>
                <div className='Product'>
                  <h1>PRODUCTS</h1>
                  <div className= 'Product-items'>
                    {ProductList.map((ProductItem) =>{
                      return(
                        <Product
                          image = {ProductItem.image}
                          name = {ProductItem.name}
                        />
                      );
                    })} 
                  </div>
                </div>
                <div className='News'>
                  <News />
                </div>


            </div>
        )

    }
}

export default Main;