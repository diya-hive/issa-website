"use server";

import sgMail, { MailDataRequired } from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function SaveSubmission({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  message,
}: {
  firstName: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber: string;
  message: string;
}) {
  const notificationEmailToTeam: MailDataRequired = {
    to: process.env.CONTACT_FORM_RECEIVER,
    from: process.env.CONTACT_FORM_SENDER ?? "",
    subject: "Contact Form Submission",
    html: `Hi,<br /><br />A new enquiry has been submitted on the Issa Wood Industries website.<br /><br />
        <strong>Name:</strong> ${firstName + " " + lastName} 
        <br /><strong>Email:</strong> ${emailAddress} 
        <br /><strong>Phone:</strong> ${phoneNumber} 
        <br /><strong>Message:</strong> ${message} 
        <br /><br />Thanks.`,
  };
  try {
    await sgMail.send(notificationEmailToTeam);
    return true;
  } catch (e) {
    console.error(e);
  }
}
