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
  setBtnVrtTest: Function
}

function Card(props: adProps) {


  function sendPetition(testClicked: test) {
    props.setLoading(true);

    if(testClicked.name !== 'VRT'){
      props.setBtnVrtTest(false)
    }

    axios.get(testClicked.route, 
    { headers: {crossorigin:true}}).then( res =>  {

      if(testClicked.name === 'VRT'){
        props.setBtnVrtTest(true)
      }

      props.setResults(JSON.stringify(res.data));

      props.setLoading(false);
    }
    ).catch(err=>{
      props.setResults("There was an error");
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
