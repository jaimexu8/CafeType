import Navbar from "../components/navbar";
import AccountView from "../components/account/account-view";
import LoginView from "../components/account/login-view";
// import SignupView from "../components/account/signup-view";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function Account() {
  const userID = useSelector(
    (state: RootState) => state.userID.value
  ) as number;

  return (
    <div className="layout">
      <div className="content">
        <Navbar />
        <div className="main">
          {userID !== -1 ? <AccountView /> : <LoginView />}
        </div>
        <Footer />
      </div>
    </div>
  );
}
