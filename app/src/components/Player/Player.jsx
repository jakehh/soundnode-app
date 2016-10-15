import React, { Component } from 'react';
import './player.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class Searchbar extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      playingSong: false,
      progress: 0
    };
  }

  /**
   * When the component is added, add our event listeners.
   */
  componentDidMount () {
    /**
     * Event listeners to add
     *    typeahead(keyword)
     *    refocusTypehead(keyword)
     *    blurTypeahead()
     *    onSubmit(keyword)
     */
  }

  /**
   * When the component is being destroyed, kill our event listeners.
   */
  componentWillUnmount () {}

  /**
   *
   */
  nextSong () {

  }


  render () {
    return (
      <div className="player">
        <div className="player_inner">
          <div className="player_progress_wrapper">
            <div className="player_progress">
              <span className="player_progress_bar" id="player-progress"></span>
            </div>
          </div>
          <div className="player_details">
            <img id="playerThumb" src="public/img/song-placeholder.png" alt="" className="player_thumb" ng-click="goToSong($event)"></img>

              <h2 id="playerTitle" className="player_title" ng-click="goToSong($event)"></h2>
              <h4 id="playerUser" className="player_user" ng-click="goToUser($event)"></h4>

              <div className="player_time">
                <span className="player_timeCurrent" id="player-timecurrent"></span>
                <span className="player_duration" id="player-duration"></span>
              </div>
              <div className="player_actions">
                    <span className="player_favorite" ng-click="favorite($event)" ng-hide="!isSongPlaying">
                      <i className="fa fa-heart"></i>
                    </span>
              </div>
          </div>
          <div className="player_controls">
                <span className="player_prevSong" ng-click="prevSong($event)">
                    <i className="fa fa-step-backward thin"></i>
                </span>
            <span className="player_play-pause" ng-click="playPause($event)">
                    <i className="fa fa-play"></i>
                    <i className="fa fa-pause thin"></i>
                </span>
            <span className="player_nextSong" ng-click="nextSong($event)">
                    <i className="fa fa-step-forward thin"></i>
                </span>
            <span className="player_lock" ng-click="lock($event)">
                    <i className="fa fa-lock thin"></i>
                </span>
            <span className="player_repeat" ng-click="repeat($event)">
                    <i className="fa fa-repeat thin"></i>
                </span>
            <span className="player_shuffle" ng-click="shuffle($event)">
                    <i className="fa fa-random thin"></i>
                </span>
            <span className="player_queueList" ng-click="toggleQueue($event)">
                    <i className="fa fa-list thin"></i>
                </span>
          </div>
          <div className="player_volume">
            <i className="fa fa-volume-up" ng-click="toggleRange()"></i>
            <input className="player_volume_range" type="range" name="volume_range" id="volume_range" min="0.0" max="1" step="0.1" onChange="adjustVolume(volume)" data-isVisible="{{ isVisible }}"></input>
          </div>
          <audio id="player" controls src="" className="player_currentSong"></audio>
        </div>
      </div>
    )
  }
}

export default Searchbar;
