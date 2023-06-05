import * as yup from "yup";

const requiredField = "* This field is required";
const SignupFormSchema = yup.object().shape({
  firstName: yup.string().min(1).required(requiredField),
  lastName: yup.string().min(1).required(requiredField),
  email: yup
    .string()
    .email(
      "Invalid email provided. Email must be in the format: abc@emample.com"
    )
    .required(requiredField),
  password: yup
    .string()
    .min(8, "Password cannot be less than 8 characters")
    .required(requiredField),
});

export default SignupFormSchema;
