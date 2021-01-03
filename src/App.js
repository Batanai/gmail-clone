import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./emailList/EmailList";
import Mail from "./mail/Mail";
import SendMail from "./sendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMesageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./login/Login";
import { auth } from "./firebase/firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMesageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // then user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
