import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const {user} = useContext(UserContext)
    const {name} = user
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
            <pre>{name}</pre>
        </div>
    )
}
