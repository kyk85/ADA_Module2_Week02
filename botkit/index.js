var Botkit = require('botkit')
var controller = Botkit.slackbot({
	debug: false
});

if (!process.env.token) {
	console.log('Error: Specify token in environment');
	process.exit(1);
}

controller.spawn({
	token: process.env.token
}).startRTM(function(err) {
	if (err) {
		throw new Error(err);
	}
});

controller.hears(['hi', 'hello', 'howdy'], 'direct_message,direct_mention,mention',
	function(bot, message) {
		bot.reply(message, 'Hello there! :wave:');
});

controller.hears(['wod'], 'direct_message,direct_mention,mention',
	function(bot, message) {
		var names=['<@botada>','@huiteng','@jerryho','@kenix'];
		var rng=Math.floor(Math.random()*4);
		bot.reply(message, names[rng] + ' is interested in doing the WOD today!');
	});

controller.hears(['trip'], 'direct_message,direct_mention,mention',
	function(bot,message){
		bot.startConversation(message, function(err,convo){
			convo.ask('Where would you like to go today?', function(response, convo){
				convo.say("Alright let's go to " + response.text);
				convo.next();
				convo.ask('What would you like to do there?',function(response, convo){
					convo.say("Cool, sounds like a plan!");
					convo.next();
				})
			});

		});
	});