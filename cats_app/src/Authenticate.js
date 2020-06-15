import React, { Component } from 'react';

import Signup from './Signup';
import Login from './Login';

class Authenticate extends Component {

  state = {
    isLogin: true
  }

  toggleLoginOrSignup = () => {
    this.setState({ isLogin: !this.state.isLogin });
  }

  render() {
    const { isLogin } = this.state;
    const { setCats } = this.props;

    return(
      <div className="authenticate">
        { isLogin ? <Login setCats={setCats} /> : <Signup /> }
        <button onClick={this.toggleLoginOrSignup}>
          { isLogin ? "Need to Signup?" : "Need to Login?" }
        </button>
      </div>
    )
  }
}

export default Authenticate;