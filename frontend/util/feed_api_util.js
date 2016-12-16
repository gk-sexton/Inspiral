const grabArticles = (url) => {
   return $.ajax({
     type: "GET",
     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(`${url}`),
     dataType: 'json'
   });
 }

export default grabArticles;
