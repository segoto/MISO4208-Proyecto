import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Status } from '../constants/constants'

const QueueIcon = (props) => {
  switch (props.status) {
    case Status.DONE:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          className="bi bi-check2-circle text-success"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
          <path
            fillRule="evenodd"
            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
          />
        </svg>
      )

    case Status.EXECUTING:
      return <Spinner animation="border" size="sm" variant="primary" />

    default:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          className="bi bi-clock text-secondary"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
          />
          <path
            fillRule="evenodd"
            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      )
  }
}

export default QueueIcon
