import React, { useEffect } from "react";
import { StyledHeader } from "./styled";
import logo from "../../images/logo";

const Header = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <StyledHeader>
            <img src={logo} />
          </StyledHeader>
        </h1>
      </div>
    </header>
  );
};

export default Header;
