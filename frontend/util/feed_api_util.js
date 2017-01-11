// const grabArticles = (url) => {
//    return $.ajax({
//      type: "GET",
//      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(`${url}`),
//      dataType: 'json'
//    });
//  }
const grabArticles = (url) => {
 return ($.ajax({
   type: "GET",
   url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22" + encodeURIComponent(`${url}`) + "%22&format=json&diagnostics=true&callback=" ,
   dataType: 'json'
 }));
}

export default grabArticles;
