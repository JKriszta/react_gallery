import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import JsonData from '../data.json';

 export const Home = (props) => {
  // console.log(props);

  const [index, setIndex] = useState(0);
	const data = JsonData.Home.carouselData;
	console.log(data);

  useEffect(() => {
    props.stopLoading();
  },[props]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
			{data.map((slide, i) =>
      <Carousel.Item key={i}>
        <div className="wrapper" >
          <img className="d-block w-100 wrapper_img" src={slide.image} alt="First slide"/>
        </div>
        <Carousel.Caption>
          	<h3>{slide.caption}</h3>
						<p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
 			)}
    </Carousel>
    <div className="row mt-3" >

    <div className="card col-md-3 col-sm-2 col-12">
        <div className="card-body">
          <h5 className="card-title">{JsonData.Home.title}</h5>
          <p className="card-text">{JsonData.Home.subtitle}</p>
          <span className="btn btn-primary">Go somewhere</span>
        </div>
    </div>

    <div className="card col-md-3 col-sm-2 col-12">
        <div className="card-body">
          <h5 className="card-title">{JsonData.Home.title}</h5>
          <p className="card-text">{JsonData.Home.subtitle}</p>
          <span className="btn btn-primary">Go somewhere</span>
        </div>
    </div>

    <div className="card col-md-3 col-sm-2 col-12">
        <div className="card-body">
          <h5 className="card-title">{JsonData.Home.title}</h5>
          <p className="card-text">{JsonData.Home.subtitle}</p>
          <span className="btn btn-primary">Go somewhere</span>
        </div>
    </div>



    </div>

    </div>
  );
}
