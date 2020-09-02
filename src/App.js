import React from 'react';
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import './App.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      positionY: 0,
    }
    // this.position = null
  }

  componentDidMount() {
    const that = this;
    // const timer = setTimeout(() => {
    //   this.setState({
    //     loading: false
    //   })
    //   clearTimeout(timer)
    // }, 1200)

    this.position = setInterval(() => {
      that.setState({
        positionY: that.state.positionY + 1
      })
    }, 1200);
  }

  // componentWillUnmount() {
  //   clearInterval(this.position);
  // }

  render() {
    const { positionY, loading } = this.state;
    console.log(positionY, 'positionY', loading)
    return (<div className='back_img' >
      <CSSTransition
        in={loading}
        unmountOnExit
        timeout={300}
        classNames="loading"
      >
        <div className="loading_container">
          <div className="load_img" style={{ backgroundPositionY: -(positionY % 7) * 2.5 + 'rem' }}></div>
          <svg className="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <ellipse cx="26" cy="10" rx="26" ry="10"
              style={{ fill: '#dddddd', stroke: 'none' }}
            />
          </svg>
        </div>
      </CSSTransition>
    </div>
    )
  }
};
