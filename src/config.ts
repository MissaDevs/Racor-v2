import * as dotenv from 'dotenv';

dotenv.config()

export default {
  Discord_Secret: process.env['CLIENT_SECRET'],
  Discord_Id: process.env['CLIENT_ID'],
}
