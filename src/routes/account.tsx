import Navbar from "../components/navbar";
import AccountView from "../components/account-view";
import LoginView from "../components/login-view";
// import SignupView from "../components/signup-view";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

export default function Account() {
  const loginStatus = useSelector(
    (state: RootState) => state.loginStatus.value
  );

  return (
    <div className="layout">
      <div className="content">
        <Navbar />

        <div className="main">
          {loginStatus ? <AccountView /> : <LoginView />}
        </div>

        <Footer />
      </div>
    </div>
  );
}
