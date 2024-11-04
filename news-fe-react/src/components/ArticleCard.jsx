const ArticleCard = (props) => {
  console.log(props);

  const { article } = props;
  console.log(article);
  return (
    <>
      <div className="itemCard">
        <ul>
          <li>Name: {article.title} </li>

          <li>
            <img src={article.article_img_url} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArticleCard;
