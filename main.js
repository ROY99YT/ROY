const Discord = require('discord.js-selfbot-v13');

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - Hogaya re tera jake dekh le`
  )
  bitly_axel = "https://youtube.com/@royofficialxyz"

  const r = new Discord.RichPresence() 
    .setApplicationId('1079010612769722508')
    .setType('PLAYING') 
    .setURL('https://youtube.com/@royofficialxyz')
    .setState('Playing')

    .setName('Genshin Impact')
    
    .setDetails('#royofficialxyz')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1073180119151149098/1255253555904905286/genshin-genshin-impact.gif?ex=667c7579&is=667b23f9&hm=05226ed2576a71088855eef0790176cb1ef4c72bee0695c934b58af89f37774d&')
    
    .setAssetsLargeText('Join us')
    //.setAssetsSmallImage('https://media.discordapp.net/attachments/906047691337908274/1102089096031121538/20210504_182139.gif')
    
    .setAssetsSmallText('OWNER')
    
        .addButton('ROY STORE', "https://myshopprime.com/ROY.STORE/0kfq6nx")
    .addButton('DISCORD',"https://discord.gg/fFCJGZC8xb")

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token) 

//Your account token

// man put ur token in secrets
