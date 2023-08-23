export function ArticlesIndex(props) {
  return (
    <div id="articles-index">
      <h2>Here are some articles about Tesla!</h2>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h4>{article.title}</h4>
          <h6>{article.author}</h6>
        </div>
      ))}
    </div>
  );
}
