import { useState } from 'react';
import { Card, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import axios from 'axios';

let BASE_URL ="https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_4yYRLiu872msI1N4mFTTQ4Bn1qbdiLQSVa7T0kfl"
function Currency() {
    const [amount,setAmount] = useState(0);
    const [fromCurrency,setFromCurrency] = useState('TRY')
    const [toCurrency,setToCurrency] = useState('USD')
    const [result,toResult] = useState(0);

    const exchange = async()=>{
        const response =await axios.get(`${BASE_URL}/?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        toResult(response.data.data[toCurrency] * amount)
    }   
  return (
    <div>
        <Card style={{width:"30rem",height:'18rem',backgroundColor:"#d6ba2b"}}>
            <CardHeader tag={"h3"} style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>Exchange Rates</CardHeader>
            <CardTitle style={{margin:"30px 0px"}}>
              <input value={amount} type='number' onChange={(e)=>{
                setAmount(e.target.value)
              }} min={0} style={{width:'100px'}}></input>
              <select value={fromCurrency} onChange={(e)=>{
                setFromCurrency(e.target.value)
              }} name="rates" id="" style={{padding:"2px",marginRight:"27px"}}>
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
              <select value={toCurrency} onChange={(e)=>{
                setToCurrency(e.target.value)
              }} name="rates" id="" style={{padding:"2px",marginLeft:"27px"}}>
                <option>USD</option>
                <option>TRY</option>
                <option>EUR</option>
              </select>
              <input value={result} onChange={(e)=>{
                toResult(e.target.value)
              }} type="number" min={0} style={{width:'100px'}}/>
              <button onClick={()=>{
                exchange()
              }} id='convertbutton' style={{marginTop:"15px",padding:"5px 15px", backgroundColor:"#3B3B3B"}}>Convert</button>
            </CardTitle>
            <CardFooter style={{borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}>
              made by mertdal
            </CardFooter>
        </Card>
    </div>
  )
}

export default Currency