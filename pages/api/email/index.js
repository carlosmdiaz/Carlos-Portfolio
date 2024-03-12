import { connectToMJ, sendEmail } from "@/helpers/emails-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    let client;
    try {
      client = connectToMJ();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the MJ failed!" });
      return;
    }
    try {
      const result = sendEmail(name, email, subject, phone, message, client);
      if (result) {
        res.status(200).json({ message: "Success" });
      }
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }
  } else {
    res.status(200).json({ message: "Success" });
  }
}

export default handler;
