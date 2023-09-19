import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import userRegSchema from "../validation-schema/userRegSchema";

const ValidateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
         });
    reset(); 
  };

  return (
    <>
      <Container>
        <div className="react-form">
          <h3 className="text-center py-4">React Form Validation</h3>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Row>
              <Col>
                <Form.Control
                  {...register("firstName")}
                  placeholder="First name"
                />
                <p className="py-2 text-danger">{errors.firstName?.message}</p>
              </Col>
              <Col>
                <Form.Control
                  {...register("lastName")}
                  placeholder="Last name"
                />
                <p className="py-2 text-danger">{errors.lastName?.message}</p>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control {...register("email")} placeholder="Email" />
                <p className="py-2 text-danger">{errors.email?.message}</p>
              </Col>
              <Col>
                <Form.Control
                  {...register("number")}
                  placeholder="Contact Number"
                />
                <p className="py-2 text-danger">{errors.number?.message}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={6}>
                <Form.Control {...register("dob")} placeholder="YYYY/MM/DD" />
                <p className="py-2 text-danger">{errors.dob?.message}</p>
              </Col>
            </Row>
            <div>
              <Button type="submit" >
                Submit
              </Button>
              <ToastContainer /> 
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default ValidateForm;
