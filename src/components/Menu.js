import {Link} from "react-router-dom";
import {useState} from "react";
import Submenu from "./Submenu";

function Menu(props) {
    const [submenu, setSubmenu] = useState([]);

    function onEnter(elSubmenu) {
        if (!elSubmenu) return;
        setSubmenu(elSubmenu);
    }

    function onLeave() {
        setSubmenu([]);
    }

    return (
        <div>
            <nav className={`${props.name}-menu`}>
                {props.data.map((el) => (
                    <div onMouseEnter={onLeave} className={`${props.name}-link-div`}>
                        <Link onClick={onLeave} onMouseEnter={() => onEnter(el.submenu)}
                              className={`${props.name}-link`} to={`${el.address}`}>{el.title}</Link>
                    </div>
                ))}
            </nav>
            {submenu.length !== 0 && <Submenu onMouseLeave={onLeave} name={"header"} submenu={submenu}/>}
        </div>
    );
}

export default Menu;
