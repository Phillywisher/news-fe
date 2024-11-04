import ArticleCard from "./ArticleCard";
export const Voter = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = (increment) => {
    setCount((currCount) => {
      return currCount + increment;
    });
  };
  return (
    <div>
      <p>Votes: {count}</p>
      <button onClick={() => incrementCount(1)}>Up vote</button>
      <button onClick={() => incrementCount(-1)}>Down vote</button>
    </div>
  );
};
