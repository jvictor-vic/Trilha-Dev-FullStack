import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div>
            <div id="Header-Container" className="container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', padding: '15px', justifyContent: 'space-between'}}>
                <h1>Cinemateca +praTi</h1>
                <br />
                <Link to={'/'} className="link">Home</Link>
                <Link to={'/favoritos'} className="link">Favoritos</Link>
            </div>
        </div>
    )
}