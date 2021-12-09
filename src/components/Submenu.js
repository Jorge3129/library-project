import {Link} from "react-router-dom";


function Submenu(props) {
    return (
        <nav onMouseLeave={props.onMouseLeave} className={`${props.name}-menu`}>
            {props.submenu.map((el) => (
                <div key={`${el}`} className={`${props.name}-link-div`}>
                    <Link onClick={props.onMouseLeave} className={`${props.name}-link`} to={`${el.address}`}>{el.title}</Link>
                </div>
                ))
            }
        </nav>
    );
}

export default Submenu;
