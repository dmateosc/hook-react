import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={
                () => {
                    increment(5)
                }
            }>Incrementar</button>
        </div>
    )
})
