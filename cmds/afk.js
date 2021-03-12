const db = require('quick.db')
const Discord  = require('discord.js')

module.exports.run = async (bot, message, args) => {

    
           const no1 = new Discord.MessageEmbed()
           .setDescription("Bạn không nên cho Hyoku biết URL khi dùng lệnh AFK**")
           .setColor("RED")
          let text = args.join(" ")
       if(text.includes("www") || text.includes("discord.gg") || text.includes("discordapp") || text.startsWith("https://")) return message.channel.send(no1)

      
        
    const status = new db.table("AFK");
    let afk = await status.fetch(message.author.id);
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    
        if(!text) { 
         text = "AFK"
        	
        } else { 
          text = text
        }

    
    if (!afk) {
      embed.setDescription(`**__${message.author.tag}__ giờ đang bận:\nHiện __${message.author.tag}__ đang: ${text}**`)
      status.set(`${message.author.id}_${message.guild.id}`, text)

    message.channel.send(embed)  
    
   }
    }
    
 
