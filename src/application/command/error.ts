export type ErrValidationFailed = {
  msg: string
}

export function NewErrValidationFailed(info: string): ErrValidationFailed {
  return {
    msg: `validation failed. ${info}`
  }
}