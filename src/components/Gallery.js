import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import JsonData from '../data.json';
import { MyModal } from './MyModal';
import { motion } from 'framer-motion';
import { Radios } from './Radios'

export const Gallery = () => {
	const [photos, setPhotos] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);
	const [rbValue, setRbValue] = React.useState('all');

  const handleChangeRb = (value) => {
    setRbValue(value);
  };
	console.log("gallery: ", rbValue)


	useEffect(() => {
		// első futtatás
		if(rbValue === "all")
		setPhotos(JsonData.Gallery)
		else {
			const newArr = JsonData.Gallery.filter(obj=> obj.category === rbValue)
			setPhotos(newArr);
		}


		// [ további futtatások: ]
	},[rbValue]);


  return (
		<div className="gallery">

			<div className="row">
					<Radios rbValue={rbValue} handleChangeRb={handleChangeRb} />
				</div>
			<div className="d-flex justify-content-center p-3">



					<ImageList sx={{ width: 570, height: 500 }} cols={3} rowHeight={180}>

				{photos.map((item, i) => (
					<motion.div  key={i} className="img-wrap" whileHover={{opacity: 1}}>
								<ImageListItem>
						<motion.img
							src={`${item.smallImage}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${item.smallImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={item.category}
							loading="lazy"
							onClick={()=>setSelectedImage(item.largeImage)}
							animate={{rotate: 0}}
							transition={{from: 90, duration: 0.8}}
						/>
					</ImageListItem>
					</motion.div>
				))}

					</ImageList>
			</div>
				{selectedImage && <MyModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
		</div>
  );
}