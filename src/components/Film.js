import React from 'react';

const Film = ({url, children})=>
{
    return(
        <li>
            <a href={url}><span >{children}</span></a>
        </li>
    )
}

export default Film;