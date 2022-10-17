import React from 'react'
import {Section,Heading,Row,Img} from './SupportBottomStyle'
import azure from '../../assets/icons/azure.svg'
import aws from '../../assets/icons/aws.svg'
import googleCloud from '../../assets/icons/google-cloud.svg'


function SupportBottom() {
  return (
    <Section>
        <div className="_container-fluid">
        <Heading>Built For</Heading>
        <Row>
            <Img src={azure}/>
            <Img src={aws}/>
            <Img src={googleCloud}/>
        </Row>
        </div>
    </Section>
  )
}

export default SupportBottom