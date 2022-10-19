<p align="center">
    <h1 align="center">Watch Together</h1>
    <h4 align="center">Open source discord bot with YouTube activity to watch videos in voice channels</h4>
</p>

<p align="center">
    <a href="https://github.com/yewshanooi/watch-together/releases/">
        <img alt="Latest Version" src="https://img.shields.io/github/v/release/yewshanooi/watch-together?include_prereleases&style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/watch-together/">
        <img alt="Repository Size" src="https://img.shields.io/github/repo-size/yewshanooi/watch-together?style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/watch-together/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/yewshanooi/watch-together?style=flat-square">
    </a>
</p>
<br/>

## Features
- **Watch Together** *(with YouTube Activity)*
<br/>

## Dependencies
###### Node.js
Node.js version **≥16.9.0** is required

###### Packages
<table>
  <tr>
    <td><a href="https://www.npmjs.com/package/chalk">chalk@4.1.2</a></td>
    <td><a href="https://www.npmjs.com/package/dotenv">dotenv@16.0.3</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/discord-api-types">discord-api-types@0.37.11</a></td>
    <td><a href="https://www.npmjs.com/package/node-fetch">node-fetch@2.6.7</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/discord.js">discord.js@14.5.0</a></td>
    <td><a href="https://www.npmjs.com/package/nodemon">nodemon@2.0.20</a></td>
  </tr>
</table>
<br/>

## Guide
###### Configuration Files
1. **Clone** this repository to your local drive
```sh
git clone https://github.com/yewshanooi/watch-together.git
cd watch-together
```
2. Install the required **npm packages**
```
npm install
```
3. Create a new **.env** file and fill it with your own secret keys
```
TOKEN=
CLIENT_ID=
```
4. Run the **deploy.js** file to deploy application commands
```
node deploy.js
```
5. Run the **index.js** file to start the bot<br/>
💡 *Don't forget to run **deploy.js** file before **index.js** file, otherwise commands won't appear as they are not updated*
```
node index.js
 -or-
nodemon
```

###### Bot & Application
1. Visit [Discord Developer Portal](https://discord.com/developers/applications) to create a new application

2. Add a **Bot user** to your application

3. Enable `PUBLIC BOT` authorization flow option for the application **(OPTIONAL)**

4. Enable `PRESENCE INTENT` and `SERVER MEMBERS INTENT` privileged gateway intent option for the application **(REQUIRED)**

5. Replace this **OAuth2 URL** template with your **Client ID** and paste it in your browser to invite the application to your server
```url
https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions=274878000129&scope=bot%20applications.commands
```

###### OAuth2 URL Scopes & Permissions
<p align="left">
    <img src=".github/generate_oauth2_url.png"/>
</p>
<br/>

## License
This application is licensed under the **MIT License**
```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
<br/>

## Contributors
- [yewshanooi](https://github.com/yewshanooi)
