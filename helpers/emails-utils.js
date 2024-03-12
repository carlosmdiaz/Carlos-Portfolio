import Mailjet from "node-mailjet";
export function connectToMJ() {
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );
  return mailjet;
}

export function sendEmail(name, fromEmail, subject, phone, message, mailjet) {
  let boolResult = false;
  const request = mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "carlosdiaz3979@gmail.com",
            Name: name,
          },
          To: [
            {
              Email: "carlosdiaz3979@gmail.com",
              Name: "Carlos Diaz",
            },
          ],
          Subject: subject,
          TextPart: `Greetings from ${name}!`,
          HTMLPart: `<h3>
            Dear Carlos, ${name} has sent you a message through your portfolio. His/Her phone number is: ${phone}, and his/her email is: ${fromEmail}
          </h3>
          <br />
          <h3>Message:</h3>
          <p>
            ${message}
          </p>
          <h3>Thank You,</h3>
          <h3>MailJet</h3>`,
        },
      ],
    })
    .then((result) => {
      if (result) {
        boolResult = true;
        return boolResult;
      }
      return result.body;
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

  return request;
}
