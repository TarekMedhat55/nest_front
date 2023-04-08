import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import Image from "next/image";
const ResetCode = () => {
  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: Yup.object({
      resetCode: Yup.string().required("reset Code is Required"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <>
      <Head>
        <title>Reset Code - Nest </title>
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
              />
            </div>
            <div className="login-header">
              <h2>Reset Code</h2>
              <p>We have sent the code to your email address</p>
            </div>
            <div className="login-form">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <FormInput
                    name={"resetCode"}
                    placeholder={"Enter reset code"}
                    title={"Reset Code *"}
                    type={"text"}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.resetCode}
                    formikTouched={formik.touched.resetCode}
                    formikErrors={formik.errors.resetCode}
                  />
                  {formik.touched.resetCode && formik.errors.resetCode ? (
                    <div className="text-danger ">
                      {formik.errors.resetCode}
                    </div>
                  ) : null}
                </div>
                <div className="button-submit">
                  <button type="submit"> Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetCode;
