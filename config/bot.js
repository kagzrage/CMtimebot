/**
	* @module config/bot
	* @desc Before editing, this file should be cloned from bot.js.template to bot.js
	* @author WizardCM <bots@wizardcm.com>
*/

/**
	@type {Object.<string, string>}
*/
module.exports = {
	/**
	 * @desc Bot username without discriminator
	 * @default "MyTimeBot"
	 * @type string
	 */
	name: "Creative Masters Asia Time Bot",
	/**
	 * @desc Global bot command prefix
	 * @default "?"
	 * @type string
	*/
	prefix: "?",
	/** 
	 * @desc Discord API bot token (keep it secret)
	 * @default "InsertYourTokenHere"
	 * @type string
	 */
	/** 
	 * @desc Global bot response heading
	 * @default "\uD83D\uDD52 Discord Time Bot"
	 * @type string
	 */
	title: " Creative Masters Asia Time Bot"
};
bot.login(process.env.token);
