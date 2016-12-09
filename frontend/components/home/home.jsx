class Home extends React.Component {
  render () {
    return (
      <div>
        <h2 className="user-welcome"> {this.props.currentUser.username} is the current user</h2>
        <button className="logout-button" onClick={this.logoutCB(this.props.logout, this.props.router)}>Log out</button>
      </div>
    );
  }
}
export default withRouter(Home)
