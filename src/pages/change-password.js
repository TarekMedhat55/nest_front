import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import Image from "next/image";
const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      password: "",
    },
    validationSchema: Yup.object({
      confirmPassword: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Confirm Password Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Change Password - Nest </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="login">
        <div className="container-fluid">
          <div className="login-content">
            <div className="login-logo">
              <Image
                src="/images/logo.svg"
                alt="nest"
                width={215}
                height={66}
              />{" "}
            </div>
            <div className="login-header">
              <h2>Reset password</h2>
              <p>Please enter a new password to use for your Nest account</p>
            </div>
            <div className="login-form">
              <form onSubmit={formik.handleSubmit}>
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
                <div className="mb-3">
                  <FormInput
                    name={"confirmPassword"}
                    placeholder={"Enter confirm password"}
                    title={"Confirm Password *"}
                    type={"password"}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    formikTouched={formik.touched.confirmPassword}
                    formikErrors={formik.errors.confirmPassword}
                  />
                </div>
                <div className="button-submit">
                  <button type="submit"> Change Password </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
