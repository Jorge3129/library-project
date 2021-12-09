import {Carousel} from "react-responsive-carousel";

function CustomCarousel(props) {
    return (
        <Carousel showArrows={true} showThumbs={false}>
            {props.images.map((el) => (
                <div>
                    <img key={`${el}`} className={`${props.name}-img`} src={el} alt={el}/>
                </div>
            ))}
        </Carousel>
    );
}

export default CustomCarousel;
