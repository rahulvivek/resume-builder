import React from "react";
import Navigation from "../components/Navigation";

import { Container, Row, Col} from 'react-bootstrap'

const Layout = (props) => {
  return (
    <>
    
      <Navigation />
      <Container>
        <Row>
          <Col>
          {
            props.children
          }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
