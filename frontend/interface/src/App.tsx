import React, {useState} from 'react';
import './App.css';
import Card from './components/card';
import Fallback from './components/fallback';
import ShowResults from './components/resutados';

function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults]  = useState<any>("Result Please execute a test");
  const testHabiticaWeb = [ 
      { name: "Feature Testing", route: "http://localhost:3000/test_habitica_web"},
      { name: "Random Testing", route: "http://localhost:3000/random_habitica_web"},
      { name: "Registration Testing", route: "http://localhost:3000/test-bdt-habitica-web"},
      { name:"BDT", route:"http://localhost:3000"},
    ]
  const testHabiticaMovil = [ 
      { name: "Random Testing", route: "http://localhost:3000/test-habitica-mobile"},
    ]
  const testMyExpensesMovil = [ 
      { name: "Random Testing", route: "http://localhost:3000/test-my-expenses"},
    ]

    console.log(loading);

  return (
    <>
    <div className="App">
      <Card name="Habitica web" imageLink="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-9/67593134_2338683239549371_3965243502794637312_n.png?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeH9ElLGjQO-_dn8jsRUKqElFBlSPwm2bSkUGVI_CbZtKVrz5whzRB_6uGoTMXQEpwZvJ5LfK0bYxO1JkhPRlzvh&_nc_ohc=jfFighpFBv4AX_NDm8d&_nc_oc=AQl-3NGrVc_B9KglEmg2D1WZJUajPLkWamuXrWxmu49cAwQfX9F0gvARQJ9Fn9ewOFQ&_nc_ht=scontent.fbog3-1.fna&oh=07668a3e578d2d9804f7c65b0d4e0b2f&oe=5F9568A6" testsAvailable={testHabiticaWeb.length} tests={testHabiticaWeb} setLoading={setLoading} setResults={setResults}/>
      <Card name="Habitica movil" imageLink="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-9/67593134_2338683239549371_3965243502794637312_n.png?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeH9ElLGjQO-_dn8jsRUKqElFBlSPwm2bSkUGVI_CbZtKVrz5whzRB_6uGoTMXQEpwZvJ5LfK0bYxO1JkhPRlzvh&_nc_ohc=jfFighpFBv4AX_NDm8d&_nc_oc=AQl-3NGrVc_B9KglEmg2D1WZJUajPLkWamuXrWxmu49cAwQfX9F0gvARQJ9Fn9ewOFQ&_nc_ht=scontent.fbog3-1.fna&oh=07668a3e578d2d9804f7c65b0d4e0b2f&oe=5F9568A6" testsAvailable={testHabiticaMovil.length} tests={testHabiticaMovil} setLoading = {setLoading} setResults={setResults}/>
      <Card name="My expenses movil" imageLink="https://f-droid.org/repo/icons-640/org.totschnig.myexpenses.422.png" testsAvailable={testMyExpensesMovil.length} tests={testMyExpensesMovil} setLoading={setLoading} setResults={setResults}/>
    </div>
    {loading && <Fallback/>}
    {!loading && <ShowResults results={results}/>}
    
    </>
  );
}

export default App;
