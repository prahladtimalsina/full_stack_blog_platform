import express from "express";
import { clerkWebhook } from "../controllers/webhook.controller.js";
import bodyParser from "body-parser";
const router = express.Router();

router.post("/clerk",bodyParser.raw({type: 'application/json'}), clerkWebhook); //?handle the webhook events from clerk /clearwebhook is the endpoint that we will use to receive the webhook events from clerk and bodyParser.raw({type: 'application/json'}) is used to parse the request body as raw json data because clerk sends the webhook events as raw json data. //?we need to use bodyParser.raw({type: 'application/json'}) middleware to parse the request body as raw json data because clerk sends the webhook events as raw json data. if we don't use this middleware then we won't be able to access the request body in the clerkWebhook controller function because the request body will be undefined.


export default router;  