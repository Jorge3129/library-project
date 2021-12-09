import CustomCarousel from "./CustomCarousel";
import Menu from "./Menu";
import {pages} from "../js/utils";

function Header({images}) {
    return (
        <header className={"top-header"}>
            <div className={"carousel-container"}>
                <h1 className={"header-title-container"}><a className={"header-title"} href={"/"}>Library</a>
                </h1>
                <CustomCarousel images={images} name={"header"}/>
            </div>
            <Menu data={pages} name={"header"}/>
        </header>
    );
}

export default Header;
