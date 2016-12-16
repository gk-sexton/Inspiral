import React from 'react';
import { withRouter} from 'react-router';
import { values } from 'lodash';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount(){
    const that = this;
    this.props.grabSubscriptions(this.props.currentUser).then((subscriptions)=> {
      let subs = values(subscriptions.subscriptions);
      subs.forEach(sub =>
        that.props.grabArticles(sub.url, sub.id)
      )
    });
  }

  renderArticles(){
    if (!this.props.router.params.id){
      const subData = values(this.props.articles) || [];
      const arrays = subData.map( obj => {
        let entryArray = obj.responseData.feed.entries;
        let entryContents = entryArray.map( article => {
          return article.title
          }
        )
        return entryContents
        }

      )
      const totalArray = [].concat.apply([], arrays)
      return (
        <ul className='home-feed-list'>
          { totalArray.map( content =>
              <li>{content}</li>
            )
          }
        </ul>
      )
    }
  }


  render () {
    return (
      <div className='feed'>
        { this.renderArticles() }
        { this.props.children }
      </div>
    );
  }

}
export default withRouter(Home);
