import React from "react";
import {Link} from "react-router-dom";
function HomePages() {
    return(

        <div>
            <header>
                <nav className="navbar navbar-light bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand" href="#">DevPos</Link>
                    </div>
                </nav>
            </header>
            <main>

            </main>
        </div>
    )
}


export default HomePages;