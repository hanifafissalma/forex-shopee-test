import React, {Component} from 'react';
import {
  Row, 
  Col,
  Container
} from 'reactstrap';
import RateByCountry from './component/RateByCountry';
import InputKurs from './component/InputKurs';
import AddKurs from './component/AddKurs';
import { Provider } from 'react-redux';
import store from './config/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Row style={{marginTop:30}}>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <InputKurs/>
              <RateByCountry/>
              <AddKurs/>
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
