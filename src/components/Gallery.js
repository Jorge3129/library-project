import gal1 from '../assets/gal1.jfif';
import gal2 from '../assets/gal2.png';
import gal3 from '../assets/gal3.jfif';
import gal4 from '../assets/gal4.jfif';
import gal5 from '../assets/gal5.jfif';
import gal6 from '../assets/gal6.jfif';
import img1 from "../assets/aeneid.jpg";
import img2 from "../assets/lucretius.jpg";
import img3 from "../assets/lucr2.jpg";

export default function Gallery() {

    let images = [gal1, gal2, gal3, gal4, gal5, gal6, img1, img2, img3];

    return (
        <div>
            <h2>Gallery</h2>
            <ul className={"gallery-list"}>
                {images.map((el) => (
                    <li key={`${el}`} className={"gallery-item"}>
                        <img className={"gallery-image"} src={`${el}`} alt={`${el}`}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
