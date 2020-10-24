import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, Image} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import './vrt.css';

class Report extends React.Component{

    constructor(props) {
        super();
        this.state = {
            test: props.test
        }
    }

  render() {
    return <Row className='report-vrt-row'>
        <Col className="box">
            <Col className="title"><strong>Fecha del Reporte</strong></Col>
            <Col>{`${Date(Date.now().toString())}`}</Col>
        </Col>
        <Col className="col-image">
          <Col className="title"><strong>Imagen Base</strong></Col>
            <Image className="image" src={this.state.test.imagen_base ? this.state.test.imagen_base: ""} rounded/>
        </Col>
        <Col className="col-image">
            <Col className="title"><strong>Imagen Modificada</strong></Col>
          <Image className="image" src={this.state.test.imagen_mod ? this.state.test.imagen_mod: ""} rounded />
        </Col>
        <Col className="col-image">
          <Col className="title"><strong>Diferencias</strong></Col>
            <Image className="image" src={this.state.test.imagen_diff ? this.state.test.imagen_diff: ""} rounded />
        </Col>
        <Col className="col-data">
            <Col className="title"><strong>Información Importante</strong></Col>
            <Col><i>isSameDimensions:</i> {`${this.state.test.isSameDimensions}`}</Col>
            <Col><i>dimensionDifference:</i>
                <ul>
                    <li>width: {this.state.test.dimensionDifference.width}</li>
                    <li>height: {this.state.test.dimensionDifference.height}</li>
                </ul>
            </Col>
            <Col><i>rawMisMatchPercentage:</i> {this.state.test.rawMisMatchPercentage}</Col>
            <Col><i>misMatchPercentage:</i> {this.state.test.misMatchPercentage}</Col>
            <Col><i>diffBounds:</i>
                <ul>
                <li>Top: {this.state.test.diffBounds.top}</li>
                <li>Left: {this.state.test.diffBounds.left} </li>
                <li>Bottom: {this.state.test.diffBounds.bottom} </li>
                <li>Right: {this.state.test.diffBounds.right}</li>
                </ul>
            </Col>
        </Col>
      </Row>
  }
}

class Vrt extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        tests: props.results === undefined ? []:JSON.parse(props.results),
        show: false
    }
  }

  render() {
    return <Container fluid className='report-vrt'>
        {this.state.tests.map((test, index) => <Report key={index} test={test}/>)}
    </Container>
  }
}

export default Vrt;
