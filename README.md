<h1 align="center">
    Watch Together
    <br/>
</h1>

<h4 align="center">YouTube-integrated bot built with discord.js</h4>

## Features
- **Watch Together Activity** *(through Discord-YouTube partnership)*

## Dependencies
###### Packages
<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@discordjs/builders">discord.js@12.5.3</a></td>
      <td><a href="https://www.npmjs.com/package/dotenv">dotenv@16.0.1</a></td>
    </tr>
  </tbody>
</table>

## Guide
###### Configuration Files
1. **Clone** this repository to your drive
```sh
git clone https://github.com/yewshanooi/watch-together.git
cd watch-together
```
2. Install the required **npm packages**
```
npm install
```
3. Create a new **config.json** file and fill it with your preferred information
```json
{
  "prefix": "",
  "embedColor": ""
}
```
4. Create a new **.env** file and fill it with your own secret key
```
TOKEN=
```
5. Run the **index.js** file to start the bot
```
node index.js
 -or-
nodemon
```

###### Bot & Application
1. Visit [Discord Developer Portal](https://discord.com/developers/applications) to create a new application

2. Add a **bot user** to your application

3. Enable `PUBLIC BOT` authorization flow option for the application **(OPTIONAL)**

4. Enable `PRESENCE INTENT` and `SERVER MEMBERS INTENT` privileged gateway intent option for the application **(REQUIRED)**

5. Replace this **OAuth2 URL** template with your **Client ID** and paste it in your browser to invite the application to your server
```
https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions=93185&scope=bot%20applications.commands
```

## Contributors
- [yewshanooi](https://github.com/yewshanooi)
