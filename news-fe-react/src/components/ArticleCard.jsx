import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { article } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={article.article_img_url}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">
          <Link
            to={`/articles/${article.article_id}`}
            className="text-blue-600 hover:underline"
          >
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-600">Topic: {article.topic}</p>
        <p className="text-gray-600">Author: {article.author}</p>
        <p className="text-gray-600">Votes: {article.votes}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
