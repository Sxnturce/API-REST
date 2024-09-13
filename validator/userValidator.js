import z from "zod"

const schemaUser = z.object({
  name: z.string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string."
  }).min(5, {
    message: "Must be 5 or more characters long."
  }),

  email: z.string({
    required_error: "The email is required",
    invalid_type_error: "Email invalid"
  }).email({
    message: "This email is not valid."
  }),

  username: z.string({
    required_error: "Username is required.",
    invalid_type_error: "Username must be a string."
  }).min(5, {
    message: "Must be 5 or more characters long."
  }),

  role: z.string({
    required_error: "Role is required.",
    invalid_type_error: "Role must be a string."
  }).default("user"),
})

export function validate(object) {
  return schemaUser.safeParse(object)
}

export function partialValidate(object) {
  return schemaUser.partial().safeParse(object)
}