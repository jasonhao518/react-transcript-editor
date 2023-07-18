import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import ReactPlayer from 'react-player'

class VideoPlayer extends React.Component {

  // to avoid unnecessary re-renders
  shouldComponentUpdate(nextProps) {
    if (nextProps.previewIsDisplayed !== this.props.previewIsDisplayed) {
      return true;
    }

    if (nextProps.mediaUrl !== this.props.mediaUrl) {
      return true;
    }

    return false;
  }

  handlePlayMedia = () => {
    if (this.props.videoRef.current !== null) {
      return this.props.videoRef.current.paused
        ? this.props.videoRef.current.play()
        : this.props.videoRef.current.pause();
    }
  };
  render() {
    const isDisplayed = this.props.previewIsDisplayed ? 'inline' : 'none';

    return (
      <ReactPlayer url={ this.props.mediaUrl }
        id="video"
        controls="true"
        playsInline
        playing={this.props.isPlaying}
        onProgress={ this.props.onTimeUpdate }
        data-testid="media-player-id"
        onClick={ this.handlePlayMedia }
        onDuration={ this.props.onLoadedDataGetDuration }
        ref={ this.props.videoRef }
        className={ styles.videoEl }
        preload="auto"
        style={ {
          display: isDisplayed
        } }
      />
    );
  }
}

VideoPlayer.propTypes = {
  mediaUrl: PropTypes.string,
  isPlaying: PropTypes.bool,
  onTimeUpdate: PropTypes.func,
  onClick: PropTypes.func,
  videoRef: PropTypes.object.isRequired,
  onLoadedDataGetDuration: PropTypes.func,
  previewIsDisplayed: PropTypes.bool,
  previewViewWidth: PropTypes.string
};

export default VideoPlayer;
