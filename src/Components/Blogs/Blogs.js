import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blogs = () => {
    return (
        <div style={{ height: "72vh" }}>
            <Container className="py-5">
                <h1 className="p-3">Question Answerer</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Difference between authorization and authentication?
                        </Accordion.Header>
                        <Accordion.Body className="text-start">
                            Authentication process use for checking identity of
                            users to provide the access to the system. One the
                            other hand Authorization process for checking user
                            for accessing the resources. Authentication process
                            check users or persons are verified or not. One the
                            other hand Authorization process check user
                            validated or not.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Why are you using firebase? What other options do
                            you have to implement authentication?
                        </Accordion.Header>
                        <Accordion.Body className="text-start">
                            I am using firebase for authentication user and
                            hoisting website. some other options i have to
                            implement authentication are okka, oOneLogin,
                            JumpCloud, Auth0, FrogeRock etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            What other services does firebase provide other than
                            authentication?
                        </Accordion.Header>
                        <Accordion.Body className="text-start">
                            Firebase other are Cloud Firestorm, Cloud Functions.
                            Authentication, Hosting, Cloud Storage, Google
                            Analytics, Predictions, Cloud Messaging etc.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blogs;
