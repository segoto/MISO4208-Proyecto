import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { Status } from '../constants/constants'
import QueueIcon from './queueIcon'

const Queue = ({ executionQueue }) => {
  const setTextColor = (prueba) => {
    switch (prueba.status) {
      case Status.IN_QUEUE:
        return ''

      case Status.EXECUTING:
        return 'text-primary'

      default:
        return 'text-success'
    }
  }

  if (executionQueue.length === 0) {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>Aún no has ejecutado ninguna prueba.</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
  return (
    <div>
      <ListGroup>
        {executionQueue.map((prueba) => (
          <ListGroup.Item>
            <Row>
              <Col md={6}>{prueba.name}</Col>
              <Col md={{ span: 4, offset: 2 }} className={setTextColor(prueba)}>
                <strong>{prueba.status}</strong>{' '}
                {<QueueIcon status={prueba.status} />}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Queue
