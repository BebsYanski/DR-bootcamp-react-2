import React from 'react'

export default function Middlebar(props) {
    return (
        <div style={{ borderBottom: 'solid 1px #ccc', padding: '1rem' }}>
            {props.text}
            <button>Refresh</button>
        </div>
    )
}
