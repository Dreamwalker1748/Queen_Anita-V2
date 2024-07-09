//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254795297855 ";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/1a2a52f57c555a9ff7290.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tkbFZhYmJmU0QrcGt5dFBZZC9QZFZUbjFNREduQ0xXTVl0dEZhbUYzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDJLeEppLzFtQWtCcEpyeFFWazNseHY0dVpJTXJ2MnljSisyWlRkN0xGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTURHU3EwdTQrSmFLSWtvMnl5bUlJZm80SUJIMUxBZjVyMW5jdW1JU2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTWtBL3Jma05UZ0NZaGl2RHhHbGJkeGRlTy9uNTVhbGgwUm56Q2F3b0RZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OZ0UwbEZFQmVjWnVpRHpyNEtna2h5SkI0cHdjNVhKN1owTGYzWDliMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNaR255TFNTeWhnMElYTzNUdnZzUUg0ZXF2SjJsTzk3YmJXekJ5cGxnQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZvNmordnZrMXYwRHBPODZ5VkdCcmRtdnh1YU1SZGI2WmRWUmxKbDlHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmxIVzNHNEs3SmNDQmk2djhWU3hObk53MzBIbzZOaHEzTVdUbTQyUjFrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR1NXpCSkxsTHZjSjNmVStHNnlQeTUzVVJjMGFUaVdUelB0MHMyWkhsMzNrUUVET3RRRzJYZDR2bHFHTkhhRXp2SFN0a0JMWHBuTnJ4ZGVHR001dURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlBsSklQR3FyT3E0WGNsdjVOWXA4cnhLMWw0ajAxQVcyS1hvRkwzUjNPR0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtjZ2VjSC13U2cyX1E0MEtLdEE2NEEiLCJwaG9uZUlkIjoiZjRiYjg5MjQtY2IxMS00MGZiLThkMjQtNGMyOTdkY2MzNjI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ6YStURWI3eVJQdTBqT1ZHUHhtOEIweVFJTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFa1hmcFRWbG00YnpCZVhQWHpaTk9mdmlxeTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjE4OENIMkEiLCJtZSI6eyJpZCI6IjI1NDc5NTI5Nzg1NTo5NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdGK08wSEVLYnJ0clFHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnplNkJSaDFZTU1tSlhub3JXRFE2aEUxMS9Oa01Hbi9VRS81QURSQlRrVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibk56TTZtd1dvN2RqZkdadC9VMWFXMkJ3ZXI4cVA1MVp4V0tLZVd5d0hXRGJ5Tkh6Q2crYlRBa0pwOERORmYyb3VBNjAwL3Y2T1hyZFY2U0hXQjltQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilpvdmd5Vk12U0Y1akJwd1J4ak82WlJTTEdiOWRHSjlkaDhzWTcwSlB2T1ZhSzNQRGQ5bFhjR1R5cGlmMzZlb3BQeWsxNU40S3ZaM1JNL0d5dHpmYkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk1Mjk3ODU1Ojk1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJjM3VnVVlkV0RESmlWNTZLMWcwT29STmRmelpEQnAvMUJQK1FBMFFVNUYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1NjMxMjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1VkIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CHADWICK HORACE ™`",
  author: process.env.PACK_AUTHER || "CHADWICK HORACE ",
  packname: process.env.PACK_NAME || "CHADWICK HORACE ",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "CHADWICK HORACE ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
