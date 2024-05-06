// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface RequestData extends NextApiRequest {
  name: string;
  email: string;
  message: string;
}

type ResponseData = {
  success: boolean;
};

export default async function handler(
  req: RequestData,
  res: NextApiResponse<ResponseData>
) {
  const msg = {
    to: "indera.waskitho@gmail.com",
    from: "indera.waskitho@gmail.com",
    subject: "Message via Portfolio Website",
    text: `Name: ${req.body["name"]}\nEmail: ${req.body["email"]}\n\n${req.body["message"]}`,
  };
  const result = await sgMail.send(msg);
  res.status(200).json({ success: true });
}
