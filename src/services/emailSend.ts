import emailjs from "@emailjs/browser";

const serviceID = process.env.REACT_APP_emailjs_serviceID;
const templateID = process.env.REACT_APP_emailjs_templateID;
const publicKey = process.env.REACT_APP_emailjs_publicKey;

interface IEmailSend {
  email: string;
  subject: string;
  message: string;
}

export const sentEmail = async (values: IEmailSend) => {
  if (!serviceID || !templateID || !publicKey) {
    throw new Error("EmailJS is not configured");
  }
  const result = await emailjs.send(
    serviceID,
    templateID,
    {
      email_to: values.email,
      subject: values.subject,
      message: values.message,
    },
    publicKey
  );

  return result;
};
