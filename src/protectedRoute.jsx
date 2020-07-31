import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from './AuthContext'

export default function ProtectedRoute({ component: Component, ...rest }) {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={(props) => {
                if(currentUser.id){

                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname:"/",
                            state:{
                                from : props.location
                            }
                        }
                    }/>
                }
            }
            } />

    )
}
