import React from 'react';
import { motion } from 'framer-motion';

// destructurálóü szintaxis ha nem props hanem {propsName}
export const MyModal = ({selectedImage, setSelectedImage}) => {


	console.log("ok", selectedImage);

	const handleClick = (e) => {
		if(e.target.classList.contains('backdrop')){
			setSelectedImage(null)
		}
	}

	return(
			// never use modal className!!! used in Bootstrap
		<div className="backdrop" onClick={handleClick}>
			<motion.img src={selectedImage} alt="nagyított fotó"
			initial={{y:"-100vh"}}
			animate={{y:0}}
			/>
		</div>
	);
}