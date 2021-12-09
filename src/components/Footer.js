function Footer(props) {
    return (
        <footer className={props.class}>
            <div className={`${props.class}-div`}>
                {props.copyright}
            </div>
        </footer>
    );
}

export default Footer;
