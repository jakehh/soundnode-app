import React, { Component } from 'react';
import './user.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class User extends Component {

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
  loadUserProfile (e) {
    e.preventDefault();
    console.log('load the users profile (Probably use react router)')
  }

  logout (e) {
    e.preventDefault();
    alert(' Hey ');
  }

  get userAvatar () {
    return 'public/img/song-placeholder.png';
  }

  get username () {
    return 'Dummy data';
  }

  get followingCount () {
    return '123,456';
  }

  get followersCount () {
    return '123,456';
  }

  render () {
    return (
      <div className="user">
        <div className="user_profile clearfix">
          <img onClick={this.loadUserProfile} src={this.userAvatar} alt={this.username} className="user_thumb"></img>
            <div className="user_inner">
              <a href="" className="user_name" title={this.username} onClick={this.loadUserProfile}>{this.username}</a>
              <a href="" className="user_logOut" onClick={this.logout}>Log out</a>
            </div>
        </div>
        <div className="user_info">
          <span className="user_info_wrap">
            <small>{this.followingCount}</small>
            <small>following</small>
          </span>
          <span className="user_info_wrap">
            <small>{this.followersCount}</small>
            <small>followers</small>
          </span>
        </div>
      </div>
    )
  }
}

export default User;
