import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const [logInPrompt, setLogInPrompt] = useState("");

  const { setLoggedInUser } = useContext(UserContext);
  const handleClick = () => {
    const { setLoggedInUser } = useContext(UserContext);

    const handleClick = () => {
      setLoggedInUser(user);
    };
  };
  return (
    <div className="user-card">
      <li>{user.username}</li>
    </div>
  );
};
export default UserCard;
