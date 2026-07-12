//config.ts
import dotenv from 'dotenv';
 
dotenv.config();
 
export const config = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.USER_NAME!,
  password: process.env.PASSWORD!,
  displayName:process.env.DISPLAY_NAME!
  
};
//console.log(config)