import React from 'react'
import './card.css'
import axios from 'axios'
import { Status } from '../constants/constants'

type test = {
  name: string
  route: string
}

type execution = {
  id: number
  name: string
  status: string
}

type adProps = {
  name: string
  imageLink: string
  testsAvailable: number
  tests: test[]
  setLoading: Function
  setResults: Function
  setExecutionQueue: Function
  executionQueue: execution[]
}

function Card(props: adProps) {
  function sendPetition(testClicked: test, id: Number) {
    props.setLoading(true)

    props.setExecutionQueue((prevQueue: any) => {
      const queue = [...prevQueue]
      let executing = false
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].status === Status.EXECUTING) {
          executing = true
          break
        }
      }
      queue.push({
        id: id,
        name: testClicked.name,
        status: executing ? Status.IN_QUEUE : Status.EXECUTING,
      })

      return queue
    })

    axios
      .get(testClicked.route, { headers: { crossorigin: true } })
      .then((res) => {
        props.setExecutionQueue((prevQueue: any) => {
          const queue = [...prevQueue]
          for (let i = 0; i < queue.length; i++) {
            //if (queue[i].name === testClicked.name) {
            if (queue[i].id === id) {
              queue[i].status = Status.DONE
              if (i < queue.length - 1) {
                queue[i + 1].status = Status.EXECUTING
              }
              break
            }
          }

          return queue
        })

        props.setResults((prevResults: any) => {
          const data = [...prevResults]
          let processData = res.data
          console.log(processData)
          console.log(processData.length)
          if (
            testClicked.name === 'BDT' ||
            testClicked.name === 'Registration Testing'
          ) {
            processData = processData[processData.length - 1]
            console.log(processData)
          }
          let pushingData = {
            application: props.name,
            typeOfTest: testClicked.name,
            performedDate: new Date().toISOString(),
            data: processData,
          }
          data.push(pushingData)
          return data
        })
        props.setLoading(false)
      })
      .catch((err) => {
        props.setLoading(false)
        console.log(err)
      })
  }

  const tests = props.tests

  return (
    <div className="CardContainer">
      <div className="card">
        <img src={props.imageLink} alt="Person" className="card__image" />
        <p className="card__name">{props.name}</p>
        <div className="grid-child-posts">
          {props.testsAvailable} Tests Available
        </div>
        <ul className="social-icons">
          <li>
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        {tests.map((currentTest, id) => (
          <button
            key={id}
            className="btn draw-border"
            onClick={() =>
              sendPetition(currentTest, props.executionQueue.length)
            }
          >
            {currentTest.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Card
