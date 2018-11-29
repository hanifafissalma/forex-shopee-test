import React, {Component, Fragment} from 'react';
import {
    Row,
    Col,
    FormGroup,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {getInputKurs} from '../action/inputkurs';
class InputKurs extends Component{
    constructor(props){
        super(props);
        this.state={
            input:1,
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }
    handleChangeInput(e){
        this.setState({
            input: e.target.value
        }, function () {
            this.props.getInputKurs(this.state.input)
       })
    }

    render(){
        const style={
            title:{
                fontSize:16,
                fontStyle:'italic',
                fontWeight:'bold'
            },
            input:{
                fontSize:24,
                fontWeight:'bold'
            }
        };
        return(
            <Fragment>
                <div style={style.title}>USD - United State Dollars</div>
                <Row style={style.input}>
                    <Col sm="6">USD</Col>
                    <Col sm="6">
                        <FormGroup>
                            <Input type="text" value={this.state.input} name="input_kurs" onChange={this.handleChangeInput} />
                        </FormGroup>
                    </Col>
                </Row>
                <hr/>
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getInputKurs: (id) => dispatch(getInputKurs(id))
})
  
export default connect(null, mapDispatchToProps)(InputKurs)
