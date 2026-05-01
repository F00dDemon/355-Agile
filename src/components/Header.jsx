import "./Header.css"
import data from "../data.json"

function Header() {
    return (
        <header className="header">
            <h2>{data.label}</h2>

            <div className="header-info">
                <p>{data.city}</p>
                <p>Founded: {data.founded}</p>
            </div>
        </header>
    )
}

export default Header