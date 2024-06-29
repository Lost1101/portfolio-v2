import React, { useState } from 'react';
import Modal from "./Modals";
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';

const About = () =>{
    const [show, setShow] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);

    const showModal = (img) => {
        setCurrentImg(img);
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
        setCurrentImg(null);
    };
    
    const image = [
        {id: 9, img:img1},
        {id: 10, img:img2},
        {id: 11, img:img3},
        {id: 12, img:img4},
        {id: 13, img:img5},
        {id: 14, img:img6},
    ]

    return(
        <>
            <div className='About'>
                <h1>About</h1>
            <div className='About-text'>
                <div className='About-text1'>
                    <p>Nice to meet you!</p>
                </div>
                <div className='About-text2'>
                    <p>
                        I'd like to learn various kinds of knowledge, such as science, technology, or art. I enjoy to solve a problem!. In my spare time, I play games or look for jokes to share with my friends. I also like to do my hobby, yeah that's drawing, some of my arts can be seen below.
                    </p>
                </div>
            </div>
                <div className='About-imgcontainer'>
                    <div className='About-buttonimg'>
                        {image.map(img => (
                            <div key={img.id}>
                                <button type="button" onClick={() => showModal(img.img)}>
                                    <img src={img.img} alt="pict" className='About-img' />
                                </button>
                            </div>
                        ))}
                    </div>
                    <Modal show={show} handleClose={hideModal}>
                        {currentImg && <img src={currentImg} alt="pict" width={550}/>}
                    </Modal>
                    <p>You can view more on my <span><a href="https://instagram.com/lost_5311">Instagram</a></span> here</p>
                </div>
            </div>
        </>
    )
}

export default About;