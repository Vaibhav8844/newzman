import React from 'react'

export function Loading() {
    return (
        <div className="position-absolute top-50 start-50">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}
