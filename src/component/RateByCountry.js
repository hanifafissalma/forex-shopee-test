import React, {Component, Fragment} from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchRates} from '../api/rates';
import {deleteKurs} from '../action/getkurs';
class RateByCountry extends Component{
    constructor(props){
        super(props); 
        this.state={
            country:[],
            data_country:
                {
                "BGN":"Bulgarian Iev",
                "CAD":"Canadian Dollar",
                "BRL":"Brazillian Real",
                "HUF":"Hungarian Forint",
                "DKK":"Danish Krone",
                "JPY":"Japanese Yen",
                "ILS":"Israeli Shekel",
                "TRY":"Turkish Lira",
                "RON":"Romanian Ieu",
                "GBP":"Great Britain Pound",
                "PHP":"Philippines Peso",
                "HRK":"Croatian Kuna",
                "NOK":"Norwegian Krone",
                "ZAR":"South African Rand",
                "MXN":"Mexican Peso",
                "AUD":"Australian Dolar",
                "USD":"US Dollar",
                "KRW":"South KOrean Won",
                "HKD":"Hongkong Dollar",
                "EUR":"European Euro",
                "ISK":"Icelandic Krona",
                "CZK":"Czech Kruna",
                "THB":"Thai Baht",
                "MYR":"Malaysian Ringgit",
                "NZD":"New Zealand Dollar",
                "PLN":"Polish Zloty",
                "CHF":"Swiss Franc",
                "SEK":"Swedish Krona",
                "CNY":"Chinese Yuan Renmibi",
                "SGD":"Singapore Dollar",
                "INR":"Indian Rupee",
                "IDR":"Indonesian Rupiah",
                "RUB":"Russian Rouble"
            }
        };
    }

    componentDidMount(){
        this.props.fetchRates();
    }
    deleteRates(e, key){
        e.preventDefault();
        this.props.deleteKurs(key);
    }
    render(){
        const style={
            card:{
                padding: 20,
                margin:20
            },
            title:{
                fontSize:18
            },
            subTitle:{
                fontSize:14,
                fontStyle:'italic',
                fontWeight:'bold'
            },
            desc:{
                fontSize:13,
                fontStyle:'italic'
            },
            button:{
                margin: 'auto'
            }
        };
        const {kurs,input, rates} =this.props;
        const choosenKurs = Object.keys(rates).filter(function(element){
            return kurs.find(k => element === k);
        });
        
        return(
            <Fragment>
                {!kurs.length ? null : 
                    choosenKurs.map((key, index) => (
                        <Card style={style.card} key={index}>
                            <Row>
                                <Col xs="6" sm="10">
                                    <div style={style.title}>
                                        <Row>
                                            <Col sm="6">{key}</Col>
                                            <Col sm="6">{input[input.length-1]*rates[key]}</Col>
                                        </Row>
                                    </div>
                                    <div style={style.subTitle}>{key}-{this.state.data_country[key]}</div>
                                    <div style={style.desc}> 1 USD = {key} {rates[key]}</div>
                                </Col>
                                <Col xs="6" sm="2" style={style.button}>
                                    <Button color="danger" title="delete" onClick={(e) => this.deleteRates(e, key)}>-</Button>
                                </Col>
                            </Row>
                        </Card>
                    ))
                }
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchRates: () => dispatch(fetchRates()),
    deleteKurs:(id) => dispatch(deleteKurs(id))
})
const mapStateToProps = state => ({
    input: state.input_kurs.input_kurs,
    kurs:state.kurs.kurs,
    rates: state.rateslist.rates
})
export default connect(mapStateToProps,mapDispatchToProps)(RateByCountry)