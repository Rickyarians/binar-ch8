import {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
const axios = require('axios');


function CovidDashboard() {
        
        const [dataCovid, setDataCovid] = useState(
            {name: 'Indonesia', 
            positif: '0', 
            sembuh: '0', 
            meninggal: '0', 
            dirawat: '0'}
        )

        const [counter, setCounter] = useState(0)

        const getDataCovid = () => {
            axios.get('https://api.kawalcorona.com/indonesia')
        .then(function (response) {
            // handle success
            console.log(response.data[0]);
            setDataCovid(response.data[0])
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        }

        // ketika componentdidmount / useeffect -> pertama kali di render
        // Similar to componentDidMount
        useEffect(() => {
            console.log('test')
            getDataCovid()
        },[]);

        useEffect(() => {
            // apa yang dilakukan disini
            console.log('ada update')
            getDataCovid()
        },[counter]);

        const increment = () => {
            let countertemp = counter
            setCounter(countertemp += 1)
        }

return (
    <>
       <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Positif</Card.Title>
      <Card.Text>
        {dataCovid.positif}
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card>
    <Card.Body>
      <Card.Title>Sembuh</Card.Title>
      <Card.Text>
       {dataCovid.sembuh}
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Meninggal</Card.Title>
      <Card.Text>
        {dataCovid.meninggal}
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Dirawat</Card.Title>
      <Card.Text>
      {dataCovid.dirawat}
      </Card.Text>
    </Card.Body>
  </Card>
  
  
</CardGroup>
    {counter}
    <button onClick={increment}>next page</button>
    </>
)
}

export default CovidDashboard