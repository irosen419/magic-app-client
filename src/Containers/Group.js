import React from 'react'
import Card from '../Components/Card'

function Group(props) {
    return (
        <div>
            <h2>GROUP</h2>
            {this.props.groupOptions.length === 0 ? <option value="">Loading...</option> : this.props.groupOptions}
            <div className="container">
                <Card />
            </div>
        </div>
    )
}

export default Group