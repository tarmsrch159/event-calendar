import React from 'react'

function ProtectComponent() {
    return (
        <div>
            <h1>Protected Component</h1>
            <p>This component is protected and can only be accessed after login.</p>
        </div>
    )
}

export default ProtectComponent