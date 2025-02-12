import { useNavigate } from "react-router-dom";
import { avatar, logo } from "../utils/constants";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignOut = () => {
    // if (isSignOut) {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between w-screen py-2 px-8 absolute bg-gradient-to-b from-black z-10">
      <img className="w-44" src={logo} alt="Logo"></img>
      {user && (
        <div className="p-2">
          <img
            className="w-12 h-12 rounded-lg"
            src={avatar}
            alt="user-icon"
            onClick={handleProfileClick}
          ></img>
          {isOpen && (
            <div className="absolute right-10 bg-gray-950 opacity-80 text-white rounded-lg transition-all overflow-hidden">
              <ul className="cursor-pointer">
                <li className="py-1 px-6 text-xs">Hi {user.displayName}!</li>
                <li className="hover:bg-black py-1 px-6">Profile</li>
                <li
                  className="hover:bg-black py-1 px-6"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
