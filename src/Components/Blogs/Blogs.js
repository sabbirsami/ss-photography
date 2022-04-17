import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blogs = () => {
    return (
        <div>
            <Container className="py-5">
                <h1 className="p-3">Question Answerer</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            What are semantic tags?
                        </Accordion.Header>
                        <Accordion.Body className="text-start">
                            Semantic tags are HTML5 elements. We can easily
                            understand what section or what this tag going to do
                            by seeing this tag. it give some clue about what
                            happens when the link is selected So Semantic tags
                            are those which have their own definition and usage
                            according to their name. like header, footer, nav,
                            blockquote etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            What is Context API?
                        </Accordion.Header>
                        <Accordion.Body className="text-start">
                            Context API is a React structure which is help you
                            to solving major React problem props drilling. If
                            you use context api you will able to pass data
                            easily you dont event need to pass any props.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blogs;
