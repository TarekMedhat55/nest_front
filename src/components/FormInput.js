const FormInput = ({
  title,
  name,
  handleChange,
  handleBlur,
  type,
  placeholder,
  value,
  formikTouched,
  formikErrors,
}) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={
          formikTouched && formikErrors
            ? "form-control input-error"
            : "form-control"
        }
      />
    </>
  );
};

export default FormInput;
