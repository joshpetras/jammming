import React from 'react';
import './ConnectBtn.css';

class ConnectBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.connected) {
      window.location.reload();
    } else {
      this.props.onConnect();
    }
  }

  render() {
    let buttonText;
    let imageClass;
    //this.props.connected ? buttonText = this.props.connected : buttonText = 'CONNECT TO SPOTIFY';
    if (this.props.connected) {
      buttonText = this.props.connected;
      imageClass = 'Profile-image Visible'
    } else {
      buttonText = 'CONNECT TO SPOTIFY';
      imageClass = 'Profile-image'
    }
    return (
      <div className='Connect'>
        <a className='Connect-button' onClick={this.handleClick}>
          <img className={imageClass} src={this.props.imageUrl} alt=''/>
          {buttonText}
        </a>
      </div>
    );
  }
}

export default ConnectBtn;
