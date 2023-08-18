export interface FormFields {
  name: string;
  email: string;
  receiveUpdates: boolean;
}

export type FormErrors = {
  [key in keyof FormFields]?: string;
}
