import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { grabArticles } from '../../actions/article_actions';
import { grabSubscriptions } from '../../actions/subscription_actions';
import Home from './home';

const mapStateToProps = ({ session, collections, subscriptions, articles }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors,
    subscriptions: subscriptions.subscriptions,
    articles: articles.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    grabArticles: (subURL, subID) => dispatch(grabArticles(subURL, subID)),
    grabSubscriptions: (user) => dispatch(grabSubscriptions(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
