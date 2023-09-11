import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Alert, Button } from "antd";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import Modal from "../components/Modal";

const Login = () => {
  let navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    if (username !== "admin" || password !== "123456") {
      setIsModalOpen(true);
    } else {
      setLoading(true);
      dispatch(login({ username, password }))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Card title="Login" headStyle={{ textAlign: "center" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="flex items-center flex-col">
            <div className="h-20">
              <label className="block" htmlFor="username">
                Username
              </label>
              <Field
                name="username"
                type="text"
                className="border border-black rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="h-20">
              <label className="block" htmlFor="password">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="border border-black rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700"
              />
            </div>
            <Button type="primary" ghost loading={loading} htmlType="submit">
              Login
            </Button>
          </Form>
        </Formik>
        {message && <Alert message={message} type="error" className="mt-10" />}
      </Card>
    </div>
  );
};

export default Login;
