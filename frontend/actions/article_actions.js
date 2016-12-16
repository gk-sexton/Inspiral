export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
import grabArticlesUtil from '../util/feed_api_util.js';

export function grabArticles(subURL, subID) {
  return (dispatch) => {
    return grabArticlesUtil(subURL)
      .then(articles => {
        dispatch(receiveArticles(articles,subID))
      },
        err => {
            dispatch(receiveErrors(err.responseJSON))
        });
  };
}


export const receiveArticles = (articles,subID) => {
  return ({
    type: RECEIVE_ARTICLES,
    articles: {subID: subID, articles}
  });
};
