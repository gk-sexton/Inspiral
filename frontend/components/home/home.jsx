import React from 'react';
import { withRouter} from 'react-router';
import { values } from 'lodash';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.renderArticles = this.renderArticles.bind(this);
    this.recentTitle = this.recentTitle.bind(this);
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
    if (this.props.router.location.pathname==='/home'){
      const subData = values(this.props.articles) || [];
      const arrays = subData.map( obj => {
        let entryArray = obj.responseData.feed.entries;
        let entryContents = entryArray.map( article => {
          return <li className='article'>
            <span className='article-title'>{article.title}</span>
            <p className='article-body' dangerouslySetInnerHTML={{ __html: article.content }}></p>
          </li>
          }
        )
        return entryContents
        }

      )
      const totalArray = [].concat.apply([], arrays)
      return (
        <ul className='home-feed-list'>
          { totalArray.map( content =>
              <li> {content}</li>
            )
          }
        </ul>
      )
    }
  }

  recentTitle(){
    if (this.props.router.location.pathname==='/home'){
      return (
        <div className='collection-title'>Recent</div>
      )
    }
  }

  render () {
    return (
      <div className='feed'>
        { this.recentTitle() }
        { this.renderArticles() }
        { this.props.children }
      </div>
    );
  }

}
export default withRouter(Home);
