import { OAuth2Client } from "google-auth-library";
import { config } from "../config/config"; 

const client = new OAuth2Client(config.clientId);

export const verifyToken = async (idToken: string) => {
  try {
    console.log(idToken);
    
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: config.clientId,
    });
    return ticket.getPayload();
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};