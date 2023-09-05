const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const {userAccount} = require("sphinx-run");
const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({ checkUpdate: false });
new userAccount(client, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['995642982550224918','294882584201003009','894633316010066032','396464677032427530','824119071556763668','1078614634803773491','994559832269009008','1118545256103821322'],
blacklistedwords: ["tokens", "auto"]
})

client.login(process.env.token)