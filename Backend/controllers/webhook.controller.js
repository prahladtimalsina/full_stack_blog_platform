import { Webhook } from "svix";
import User from "../models/user.model.js";

export const clerkWebhook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET; //?get the webhook secret from the environment variables

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Webhook secret is not defined in the environment variables",
    );
  }

  const payload = req.body; //?get the request body which contains the webhook event data
  const headers = req.headers; //?get the request headers which contains the webhook signature

  const wh = new Webhook(WEBHOOK_SECRET); //?create a new instance of the Webhook class from the @clerk/clerk-sdk package and pass the webhook secret as an argument

  let event;

  try {
    event = wh.verify(payload, headers); //?verify the webhook event using the verify method of the Webhook class and pass the payload and headers as arguments. if the verification is successful then it will return the webhook event object otherwise it will throw an error
  } catch (err) {
    console.log("Error verifying webhook event:", err);
    return res.status(400).json({
      message: "Webhook veriification failedd",
    });
  }



  if (event.type === "user.created") {
  await User.findOneAndUpdate(
  { clerkUserId: event.data.id },
  {
    clerkUserId: event.data.id,
    username:
      event.data.username ||
      event.data.email_addresses[0].email_address.split("@")[0], //?if the username is not available then use the part of the email address before the @ symbol as the username
    email: event.data.email_addresses[0].email_address,
    img: event.data.profile_image_url,
  },
  {
    upsert: true,
    returnDocument: "after",
  }
);
}

  if (event.type === "user.deleted") {

    const deletedUser = await User.findOneAndDelete({
      clerkUserId: event.data.id,
    }); //?find the user with the given clerkUserId and delete it from the database
  }

    res.status(200).json({
        message: "Webhook event received successfully", 
    });

  


};
