import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Main />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;
