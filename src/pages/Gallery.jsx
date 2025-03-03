import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from '../components/Slider';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 4000,  
            once: false,    
            offset: 100,   
        });
    }, []);

    const images = [
        "10.jpg", "11.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg",
        "01.jpg", "02.jpg", "35.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg",
        "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg",
        "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "36.jpg"
    ];

    return (
      <>
      <Slider title={'Event Gallery'}/>
        <div className='container mx-auto sm:p-5 p-3 mt-7'>
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10 gap-5 m-3'>
                {images.map((img, index) => (
                    <div key={index} data-aos="fade-up">
                        <img src={`./images/gallery/${img}`} alt={`Gallery ${img}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Gallery;
