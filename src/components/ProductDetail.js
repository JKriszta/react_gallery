import React from 'react';
import { useParams } from 'react-router-dom';
import productsJson from '../products.json';
import { useNavigate } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import tiny from './tiny.png';

export const ProductDetail = () => {

const navigate= useNavigate();
	const params = useParams();
	console.log(params.id);
	const product = productsJson.arrayOfProducts.filter(obj=> obj.id === params.id)
	console.log(product[0])

	const dominantImageColor = '#86356B';
	const placeholder = (
  	<div
   		 style={{ backgroundColor: dominantImageColor, height: 600, width: 400 }}
  		/>
);

	return(

		<div className="productDetail row justify-content-center">
			<div className="card col-md-6 col-sm-12 text-center">

  			{/* <img src={product[0].imgUrl} className="card-img-top" alt="..."/> */}

				{/* <ProgressiveImage src={product[0].imgUrl} placeholder={tiny}>
  				{(src) => <img src={src} alt={product[0].name} />}
				</ProgressiveImage> */}

				<ProgressiveImage src={product[0].imgUrl} placeholder="" >
  				{(src, loading) => {
    					return loading ? placeholder : <img src={src} alt="an image" />;
  }}
				</ProgressiveImage>;

  				<div className="card-body">
    				<h5 className="card-title">{product[0].name}</h5>
    					<p className="card-text">Price: {product[0].price}</p>
    					<button href="#" className="btn btn-primary" onClick={()=>navigate('/products')}>Go somewhere</button>
  			</div>
			</div>
		</div>
	);
}
// google search: react npm progressive image
// https://www.npmjs.com/package/react-progressive-graceful-image
// install: npm i react-progressive-graceful-image