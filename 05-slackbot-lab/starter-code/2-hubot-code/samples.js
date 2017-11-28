module.exports = function(bot) {
   bot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
   });
   bot.respond(/What's up\?/, function(res) {
       return res.send("Oh, you know...");
   });
   bot.respond(/(.*) help/, function(res) {
       var topic;
       topic = res.match[1];
       switch(topic) {
           case "git":
              return res.reply("http://bloggytoons.com/posts/2013/10/10/git-kitchen-wchef-ramsay");
              break;
           case "node":
              return res.reply("http://www.nodebeginner.org/#javascript-and-nodejs");
              break;
           case "arrays":
           case "array":
              return res.reply("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array");
              break;
           case "truthy":
           case "falsy":
              return res.reply("https://docs.nodejitsu.com/articles/javascript-conventions/what-are-truthy-and-falsy-values/");
              break;
           case "namespace":
           case "namespaces":
              return res.reply("www.codeproject.com/Articles/829254/JavaScript-Namespace");
              break;
           case "hubot":
              return res.reply("https://hubot.github.com");
              break;
           case "coffeescript":
              return res.reply("http://coffeescript.org");
              break;
           case "hoisting":
              return res.reply("http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html");
              break;
           default:
              return res.reply("Sorry, I don't seem to have resources on that topic. Try `arrays`, `coffeescript`, `falsy`, `git`, `hoisting`, `hubot`, `node`, or `truthy`.");
       }
   });
};