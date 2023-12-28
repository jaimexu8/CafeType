import Navbar from "../components/navbar";
import AccountView from "../components/account/account-view";
import LoginView from "../components/account/login-view";
import SignupView from "../components/account/signup-view";
import Footer from "../components/footer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import "../styles/base.css";
import "../styles/theme.css";

export default function Account() {
  const selectTheme = (state: RootState) => state.theme.value;
  const currentTheme = useSelector(selectTheme);
  const uid = useSelector((state: RootState) => state.uid.value) as number;
  const [viewSignup, setViewSignup] = useState(false);

  return (
    <div className="layout" id={currentTheme}>
      <div className="content">
        <Navbar />
        <div className="main">
          {uid == -1 ? (
            viewSignup ? (
              <SignupView setViewSignup={setViewSignup} />
            ) : (
              <LoginView setViewSignup={setViewSignup} />
            )
          ) : (
            <AccountView setViewSignup={setViewSignup} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
