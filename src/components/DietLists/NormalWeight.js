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

const NormalWeight = () => {
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
                    Peynirli Salata(2 yemek kasğı lor peyniri)
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    1 fincan şekersiz reçene çayı
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    2 dilim tahıllı ekmek
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    4 adet zeytin
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
                  Izgara mevsim balığı (balık takviminden bakabilirsiniz.)
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="danger">
                  1 ince dilim çavdar ekmeği
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="warning">
                  1 porsiyon mevsim meyvesi (besin takviminden bakabilirsiniz.)
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="info">
                  ü 1 tabak bol yeşillikli yağsız mevsim salatası
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
                    6-8 çorba kaşığı kurubaklagil yemeği (mercimek, maş
                    fasulyesi, nohut vb.)
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    1 tabak bol yeşillikli yağsız mevsim salatası
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    1 kutu sade probiyotik yoğurt (1/2 çay kaşığı tarçın
                    eklenebilir
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    1 kase cacık1 kase cacık
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

export default NormalWeight;
