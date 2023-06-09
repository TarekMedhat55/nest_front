import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FormInput from "@/components/FormInput";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Head>
        <title>Login - Nest </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="login">
        <div className="login-content">
          <div className="login-logo">
            <Image src="/images/logo.svg" alt="nest" width={215} height={66} />
          </div>
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>
              Don&apos;t have an account?
              <Link href="/register"> create account</Link>
            </p>
          </div>
          <div className="login-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <FormInput
                  name={"email"}
                  placeholder={"Enter email"}
                  title={"Email *"}
                  type={"email"}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values.email}
                  formikTouched={formik.touched.email}
                  formikErrors={formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger ">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <FormInput
                  name={"password"}
                  placeholder={"Enter password"}
                  title={"Password *"}
                  type={"password"}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values.password}
                  formikTouched={formik.touched.password}
                  formikErrors={formik.errors.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger ">{formik.errors.password}</div>
                ) : null}
              </div>
              <p className="forget-password">
                <Link href="/forget-password">Forget Your Password?</Link>
              </p>
              <div className="button-submit">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
