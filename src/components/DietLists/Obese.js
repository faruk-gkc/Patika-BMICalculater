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

const Obese = () => {
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
                    2 adet iyi haşlanmış yumurta yanında yarım dilim ekmek
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    Dilediğiniz kadar domates, salatalık, biber, maydanoz, roka,
                    nane
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    Dilediğiniz kadar pulbiber, kimyon, karabiber
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    Bir tatlı kaşığı tarçınla bulandırılmış zeytinyağı
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
                  1 kase mercimek çorbası (Yağlı olmasın)
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="danger">
                  1 büyük kase salatalık, biber, domatesli semizotu salatası, 3
                  zeytin
                </ListGroupItem>
                <ListGroupItem className="fs-18 h-75" variant="warning">
                  1 kase yoğurt ve 1 çay kaşığı toz zerdeçalı karıştırıp yiyin.
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
                    1 kase bol domatesli, salatalıklı semizotu salatası
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="danger">
                    2 ince dilim karpuz (Eğer yoksa 1 adet şeftali, elma gibi
                    mevsim meyvesi)
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="warning">
                    4 yemek kaşığı lor peyniri (Az yağlı ve tuzlu olmalıdır.)
                    yiyin.
                  </ListGroupItem>
                  <ListGroupItem className="fs-18 h-75" variant="info">
                    5 tam ceviz içi (Ekmek yerine yiyorsunuz)
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

export default Obese;
