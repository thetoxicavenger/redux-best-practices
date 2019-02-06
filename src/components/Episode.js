import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import Moment from 'react-moment'

export default ({ title, images, sharing_url, published_at, description }) => {
    const { small } = images
    return (
        <Col xs="6" style={{ marginTop: '10px' }}>
            <div>
                <Card>
                    <CardImg top width="100%" src={small} alt={`${title} - cover art`} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>
                            <Moment fromNow>{published_at}</Moment>
                        </CardSubtitle>
                        <CardText style={{marginTop: '10px'}}>{description}</CardText>
                        <Button href={sharing_url} type="link">Listen</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}