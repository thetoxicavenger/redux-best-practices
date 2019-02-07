import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import Moment from 'react-moment'

export default ({ firstName, lastName, email }) => {
    return (
        <Col xs="6" style={{ marginTop: '10px' }}>
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{firstName} {lastName}</CardTitle>
                        <CardSubtitle>
                            {email}
                        </CardSubtitle>
                        <Button>View</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}