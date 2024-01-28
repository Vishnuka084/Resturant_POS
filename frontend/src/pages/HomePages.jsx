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
                <div className='container mt-3'>
                    <div className='bg-light p-5 mt-4 rounded-3'>
                        <h1>Welcome to the simple Pos small business </h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Aperiam, eligendi molestiae nisi
                            numquam placeat possimus quas reprehenderit
                            repudiandae sunt ullam? od reiciendis! </p>
                        <p>If you have an issue call 0764615235</p>
                        <Link to="/pos" className='btn btn-primary'>Click here to sell products</Link>
                    </div>
                </div>

            </main>
        </div>
    )
}


export default HomePages;