import React from 'react'

const Avengers = props => {
    return (
        <div>
            {props.avengersData.map(item => {
                return (
                    <h5>
                        {item.character}'s real name is {item.realName}.
                    </h5>
                )
            })}
        </div>
    )
}

export default Avengers