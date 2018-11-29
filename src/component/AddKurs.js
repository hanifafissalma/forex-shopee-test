import React, {Component, Fragment} from 'react';
import {
    FormGroup,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';
import {fetchRates} from '../api/rates';
import {getKurs} from '../action/getkurs';
import {connect} from 'react-redux';
class AddKurs extends Component{
    constructor(props){
        super(props);
        this.state={
            rates:[],
            kurs:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.fetchRates();
    }

    handleChange(e){
        this.setState({
            kurs:e.target.value
        }, function () {
           
       });
       console.log(this.state.kurs)
    }
    handleSubmit(){
        this.props.getKurs(this.state.kurs)
    }
    render(){
        const {rates} = this.props;
        return(
            <Fragment>
                <hr/>
                <Row>
                    <Col sm={10}>
                        <FormGroup>
                            <Input type="select" name="kurs" id="kurs" value={this.state.kurs} onChange={this.handleChange}>
                                <option>+ Add More Currencies</option>
                                {Object.keys(rates).map((key, index) => 
                                    <option value={key} key={index}>{key}</option>
                                )
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <Button color="primary" onClick={this.handleSubmit} id="submit">Submit</Button>
                    </Col>
                </Row>                
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    rates: state.rateslist.rates
})
const mapDispatchToProps = dispatch => ({
    fetchRates: () => dispatch(fetchRates()),
    getKurs:(id) => dispatch(getKurs(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AddKurs)