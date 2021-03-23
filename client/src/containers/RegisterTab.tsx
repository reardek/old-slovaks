import {
  Box,
  Button,
  Card,
  createStyles,
  LinearProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

interface UserFormValues {
  email: string;
  password: string;
  nickname: string;
  firstName: string;
  lastName: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "inline-block",
      minWidth: "3em",
      padding: theme.spacing(2),
    },
  })
);

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  nickname: yup
    .string()
    .min(3, "Nickname should have minimum 3 characters length")
    .max(20, "Nickname should have maximum 20 characters length")
    .required("Nickname is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

export const RegisterTab = () => {
  const classes = useStyles();
  let history = useHistory();

  const initialValues: UserFormValues = {
    email: "",
    password: "",
    nickname: "",
    firstName: "",
    lastName: "",
  };

  return (
    <Card className={classes.card}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          setSubmitting(false);
          try {
            await axios.post("/users/signup", values);
            history.push("/");
          } catch (error) {
            console.log(error);
            setFieldError("email", "Email already exists");
          }
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Box component="span" m={1}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
            </Box>

            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
            />
            <Field
              component={TextField}
              name="nickname"
              type="text"
              label="Nickname"
            />
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First name"
            />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last name"
            />
            {isSubmitting && <LinearProgress />}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
