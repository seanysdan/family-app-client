import React from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";

import { REGISTER } from "../queries";
import { useHistory } from "react-router-dom";

const Register = () => {
  const toast = useToast();
  const [register] = useMutation(REGISTER);
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const response = await register({
        variables: {
          ...data,
        },
      });
      if (response.data.register.errors) {
        toast({
          title: "Failed to Create Account.",
          description: "Please validate your information.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Successfully Created Account.",
          description: "Please Login. Redirecting to login page...",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setTimeout(history.push("/login"), 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <Box>Register</Box>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          dateOfBirth: "",
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmit(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Field
              placeholder="John"
              name="firstName"
              type="input"
              as={Input}
            />
            <Field placeholder="Doe" name="lastName" type="input" as={Input} />
            <Field
              placeholder="username"
              name="username"
              type="input"
              as={Input}
            />
            <Field placeholder="email" name="email" type="input" as={Input} />
            <Field
              placeholder="password"
              name="password"
              type="password"
              as={Input}
            />
            <Field name="dateOfBirth" type="date" as={Input} />
            <Button disabled={isSubmitting} type="submit">
              Register
            </Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;