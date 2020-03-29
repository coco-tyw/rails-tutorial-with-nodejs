import * as command from "@/application/command";
import { NewErrValidationFailed } from "./error";

export type CreateUser = {
  name: string
  email: string
  password: string
}

export type PutUserEmail = {
  email: string
}

export type PutUserPassword = {
  password: string
}

export function validate(u: CreateUser) {
  if (u.email === "" || u.name === "") {
    return NewErrValidationFailed("invalid email")
  }
  if (u.password.length < 8) {
    return NewErrValidationFailed("invalid password")
  }
}