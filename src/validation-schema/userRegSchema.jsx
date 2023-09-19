import { object, string, date, number } from "yup";

export default object({
  firstName: string().required("*First name must be required"),
  lastName: string().required("*Last name must be required"),
  email: string()
    .email("Please enter correct email address")
    .required("*Email must be required"),
  number: string()
  .matches(/^[0-9]*$/, 'Please enter a valid contact number')
  .max(10, "Contact Number must not exceed 10 digits")
  .required('*Contact Number must be required'),
  dob: date()
    .typeError("*Date of Birth must be a valid date (YYYY-MM-DD)")
    .required("*Date of Birth must be required")
    .nullable(),
});
