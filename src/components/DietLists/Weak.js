import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./DietList.css";

const Weak = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1524903703642-0a6a52e5d24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                width="250px"
                height="354px"
              />
              <Card.Body>
                <Card.Title className="fw-400">Sabah Kahvaltısı</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="fs-18 h-75" variant="success">
                    Peynirli Sandviç(60gr lor peyniri)
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    2 fincan şekersiz çay
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    Dilediğiniz kadar zeytin,domates,salatalık
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    İki tatlı kaşığı bal
                  </ListGroupItem>
                </ListGroup>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1530912585210-7916cd026e59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                width="250px"
                height="354px"
              />
              <Card.Body>
                <Card.Title className="fw-400">Öğle Yemeği</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="fs-18 h-75" variant="success">
                  Ev yapımı meyveli yoğurt
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="danger">
                  Bir kase salata
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="warning">
                  Lahana çorbası ( Farklı günlerde hazırlayacağınız sebze
                  çorbalarını tüketebilirsiniz)
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="info">
                  Dilediğiniz kadar maydanoz, roka, nane, dereotu
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1604152135912-04a022e23696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                width="250px"
                height="354px"
              />
              <Card.Body>
                <Card.Title>Akşam Yemeği</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="fs-18 h-75" variant="success">
                    Haşlama tavuk ( 80 gram )
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    Yoğurt ( 1 kase )
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    2 ince dilim karpuz (Eğer yoksa 1 adet şeftali, elma gibi
                    mevsim meyvesi)
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    1 kase salata
                  </ListGroupItem>
                </ListGroup>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Weak;
