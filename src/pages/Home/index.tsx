import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Home.css";

const Home: React.FC = () => {
  console.log("REAAAAAACT HOME");
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Logo title="Ecoleta" />
        </header>
        <main>
          <h1>2222Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
