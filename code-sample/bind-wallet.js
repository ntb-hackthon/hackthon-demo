const { UI_DOMAIN } = process.env;
exports.run = async (client, interaction) => {
  if (!interaction.isCommand()) return;
  let { guildId } = interaction;
  let { id: userId } = interaction.user;
  const { username, bot: isBot } = interaction.user;
  if (isBot) {
    return;
  }
  guildId = guildId.toString();
  userId = userId.toString();

  await interaction.deferReply({ ephemeral: true });

  const model = require("../models/discordBind");
  const { pwd, err } = await model.getBindPwd({ userId, guildId });
  if (err) {
    await interaction.followUp({
      ephemeral: true,
      content: `Hey ${username}, Your account already binded with an walletAddress, can not be bind anymore`
    });
    return;
  }

  const link = `${UI_DOMAIN}/guild/${guildId}/buyTicket?discordBind=yes&userId=${userId}&pwd=${pwd}`;
  // const link = `http://localhost:3000/guild/${guildId}/buyTicket?discordBind=yes&userId=${userId}&pwd=${pwd}`;
  await interaction.followUp({
    ephemeral: true,
    content: `Hey ${username}, Your wallet bind private Link is: ${link}`
  });
};

exports.commandData = {
  name: "bind-wallet",
  description: "get private bind link for your current discord account, only can bind once",
  options: [
  ],
  defaultPermission: true
};

// Set this to false if you want it to be global.
exports.guildOnly = true;
