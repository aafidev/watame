module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: false,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/peRjwQPfeP", //Support Server Link
  Token: process.env.Token || "TOKEN_HERE", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "671065591192354857", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "HJarfWa9BUH0btsJ1AIzbg9WlzpV9PJD", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://144.202.72.200", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "144.202.72.200",
    port: 2333,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "cf23d2078c5f4ec1b1248ae339ae5d0c", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "179d6af69c6448ed8fecb67e1060df08", //Spotify Client Secret
  },
};
