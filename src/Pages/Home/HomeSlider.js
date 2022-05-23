import React from 'react';

const HomeSlider = () => {
    var sliderItem = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvN5vHMp6cunFirNPDtKN1Y2qdP8D9EOY5oDlEFqMTzx7f5RnLA9x-Qd9jZPihvOGFssI&usqp=CAU'];


    return (
        <div className='w-96'>
            {
                sliderItem.map(item => (
                        
                        <div className="carousel w-full">
                        <div id="" className="carousel-item relative w-full">
                        <img src={item} alt='' className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="" className="btn btn-circle">❮</a> 
                        <a href="" className="btn btn-circle">❯</a>
                        </div>
                        </div> 
                        </div>
                    
                ))
            }
        </div>
    );
};

export default HomeSlider;