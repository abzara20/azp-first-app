import React from 'react';
import {Link} from 'gatsby';

const Page404 = () => {
    return(
        <React.Fragment>
            <h1>404 Page not found</h1>
            <Link to= '/'>Return Home</Link> 
        </React.Fragment>
    )
}

export default Page404;