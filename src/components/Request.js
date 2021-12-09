import dayjs from "dayjs";
import {useState} from "react";

export default function Request({popup, setPopup}) {
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    return (
        <div className={"popup-back"}>
            <div className={"popup"}>
                <form onSubmit={() => setPopup({})} className={"request-form"}>
                    <div className={"close-div"}>
                        <button onClick={() => setPopup({})} type="button" className={"close"}>✖</button>
                    </div>
                    <h3 className={"request-header"}>Request book</h3>
                    <p className={"req-label"}>Title: {popup.title}</p>
                    <p className={"req-label"}>Author: {popup.author}</p>
                    <p className={"req-label"}>Genre: {popup.genre}</p>
                    <label className={"req-label"}>
                        Take:<br/>
                        <input onChange={(e) => {
                            if (dayjs(e.target.value).diff(dayjs()) < 0) {
                                alert("You can take a book only starting today!!!");
                                e.target.value = `${dayjs().format('YYYY-MM-DD')}`;
                            }
                            setStart(e.target.value);
                        }} type={"date"} min={dayjs()}/>
                    </label>
                    <label className={"req-label"}>
                        Return:<br/>
                        <input type={"date"} onChange={(e) => {
                            console.log(start)
                            if (!start) return;
                            if (dayjs(e.target.value).diff(start) <= 0) {
                                alert("You can return a book only after taking it!!!");
                                e.target.value = `${dayjs().add(1,'day').format('YYYY-MM-DD')}`;
                            }
                            setEnd(e.target.value);
                        }
                        }/>
                    </label>
                    <button onMouseDown={(e) => {
                        e.preventDefault();
                        if(!start||!end){
                            alert("Choose valid dates!");
                        }
                    }} className={"request-book-button"}
                            id={"request-popup-button"}>Request
                    </button>
                </form>
            </div>
        </div>
    );
}
