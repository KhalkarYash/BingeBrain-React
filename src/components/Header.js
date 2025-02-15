import { useNavigate } from "react-router-dom";
import { user_avatar, logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    // unsubscribe when component unmounts
    return () => unsubscribe(); // cleanup
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between w-screen py-2 px-8 absolute bg-gradient-to-b from-black z-10">
      <img className="w-44" src={logo} alt="Logo"></img>

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="outline-none mx-4 my-2 py-2 px-4 rounded-lg bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-950 mx-4 my-2 py-2 px-4 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-lg"
            src={user_avatar}
            alt="user-icon"
            onClick={handleProfileClick}
          ></img>
          {isOpen && (
            <div className="absolute -bottom-16 right-20 md:right-10 bg-gray-950 opacity-80 text-white rounded-lg transition-all overflow-hidden">
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
