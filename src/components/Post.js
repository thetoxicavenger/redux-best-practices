import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import Moment from 'react-moment'

export default ({ title, metadata }) => {
    return (
        <Col xs="6" style={{ marginTop: '10px' }}>
            <div>
                <Card>
                    <CardImg top width="100%" src={metadata.featuredimage.url} alt={`${title} - cover art`} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>
                            {metadata.author}
                        </CardSubtitle>
                        <Button>Read</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}