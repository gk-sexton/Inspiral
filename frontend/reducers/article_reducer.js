import { RECEIVE_ARTICLES } from '../actions/article_actions';
import { merge } from 'lodash'
const noArticles = {
    articles: {},
    errors: []
  };

const ArticleReducer = (state = noArticles, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ARTICLES:
      let nuState = merge({}, state, {errors: []})
      let data = action.articles.articles;
      nuState.articles[action.articles.subID] = data;
      return nuState

    // case RECEIVE_ERRORS:
    //   return Object.assign( {}, state, {errors: action.errors});

    default:
      return state;
  }
};

export default ArticleReducer;
