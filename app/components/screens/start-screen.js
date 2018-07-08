import React from 'react'
import SplashContainer from '../../containers/splash-container'
import LoginContainer from '../../containers/login-container'
import { Drawer } from '../navigators'

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.checkAuthentication()
    }

    render() {
        if (this.props.isLoadingApp && this.props.isSplashScreen) {
            return <SplashContainer />
        } else if (!this.props.isAuthenticated) {
            return <LoginContainer />
        } else if (this.props.isAuthenticated) {
            return <Drawer />
        }
    }
}

export default StartScreen