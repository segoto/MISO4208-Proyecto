import React from 'react';
import './card.css';
import axios from 'axios';

type test = {
  name: string,
  route: string
}

type adProps = {
  name: string,
  imageLink: string,
  testsAvailable: number,
  tests: test[],
  setLoading : Function,
  setResults : Function,
}

function Card(props: adProps) {


  function sendPetition(testClicked: test) {
    console.log(testClicked.name);
    props.setLoading(true);
    axios.get(testClicked.route, 
    { headers: {crossorigin:true}}).then( res =>  {
      console.log(JSON.stringify(res.data));
      props.setResults((prevResults: any)=>{
        const data = [...prevResults];
        data.push(res.data);
        return data;
      });
      
      console.log(res);
      props.setLoading(false);
    }
    ).catch(err=>{
      
      props.setLoading(false);
      console.log(err);
    });
  }

  const tests = props.tests;

  return (
    <div className="CardContainer">
      <div className="card">
      <img src={props.imageLink} alt="Person" className="card__image" />
      <p className="card__name">{props.name}</p>
        <div className="grid-child-posts">
          {props.testsAvailable} Tests Available
        </div>
      <ul className="social-icons">
        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="/"><i className="fa fa-codepen"></i></a></li>
      </ul>
      {tests.map((currentTest, id) => (
        <button key={id} className="btn draw-border" onClick={() => sendPetition(currentTest)}>{currentTest.name}</button>))}
    </div>
    </div>
  );
}

export default Card;
