import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import TypingTest from "../components/typing test/typing-test.tsx";

export default function Root() {
  return (
    <div className="layout">
      <div className="content">
        <Navbar />
        <div className="main">
          <TypingTest />
        </div>
        <Footer />
      </div>
    </div>
  );
}
