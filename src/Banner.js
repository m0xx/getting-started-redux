import React from 'react';

function Banner({firstName, lastName}) {
    const fullName = (!firstName || !lastName) ? 'N/A' : `${firstName} ${lastName}`;

    return (
        <div>Hello { fullName }</div>
    )
}

export default Banner;