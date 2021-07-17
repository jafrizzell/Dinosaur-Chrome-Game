const chatapi=require("twitch-chat-emotes"),Chat=new chatapi.Chat;!function(t){var i="#444";let s=["moonmoon"];const e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,i,s){e[i]=s})),e.channels&&(s=e.channels.split(","));const n=new Chat({channels:s,duplicateEmoteLimit:5}),h=[];n.on("emotes",(t=>{h.length>20&&h.pop(0),h.push({emotes:t,spawn:Date.now()})}));var o=!1;function a(t){function i(){this.canvas=t.el,this.canvas.width=.9*window.innerWidth,this.canvas.height=.9*window.innerHeight}this.canvas=t.el,this.context=this.canvas.getContext("2d"),i(),window.addEventListener("resize",i),this.cacti=[],this.nextCactus=0,this.offset=0,this.lastTick=null,this.running=!1,this.finished=!1,this.initObjects(),this.draw(),requestAnimationFrame(this.step.bind(this))}document.addEventListener("keydown",(function(t){32===t.keyCode&&(o=!0)}),!1),document.addEventListener("keyup",(function(t){32===t.keyCode&&(o=!1)}),!1),a.prototype.initObjects=function(){this.player=new Dinosaur({context:this.context,left:10,bottom:this.canvas.height-0,colour:i}),this.background=new Background({context:this.context,width:this.canvas.width,height:this.canvas.height,colour:i}),this.score=new ScoreBoard({context:this.context,left:this.canvas.width-10,bottom:26,colour:i})},a.prototype.updateCacti=function(){for(;this.offset>this.nextCactus;){for(var t=Math.floor(rand(1,3.9)),s=rand(.8,1.5),e=this.canvas.width+this.offset+50;t--;)h.length>t&&this.cacti.push(new Cactus({left:e+20*t*s,bottom:this.canvas.height-0,scale:s,emote:h.emotes.slice(-t),leftSize:rand(.5,1.5),rightSize:rand(.5,1.5),centerSize:rand(.5,1.5),colour:i}));this.nextCactus=this.offset+rand(400,this.canvas.width)}},a.prototype.removeOldCacti=function(){for(var t=0;this.cacti.length>t&&this.cacti[t].x<this.offset-50;)t++;this.cacti.splice(0,t)},a.prototype.draw=function(){this.clear(),this.background.draw(this.context,this.offset);for(var t=0;t<this.cacti.length;t++)this.cacti[t].drawColliders(this.context,this.offset),this.cacti[t].draw(this.context,this.offset);this.player.drawColliders(this.context,this.offset),this.player.draw(this.context,this.offset),this.score.draw(this.context,this.offset)},a.prototype.checkCactusHit=function(){for(var t=0;t<this.cacti.length;t++)if(this.player.collidesWith(this.cacti[t],this.offset))return this.running=!1,this.finished=!0,void(this.player.wideEyed=!0)},a.prototype.clear=function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},a.prototype.step=function(t){this.running&&this.lastTick?(this.offset+=.4*Math.min(t-this.lastTick,16.666666666666668),this.removeOldCacti(),this.updateCacti(),!this.player.isJumping(this.offset)&&o&&this.player.startJump(this.offset),this.checkCactusHit(),this.draw()):o&&(this.running=!0),this.finished||(this.lastTick=t,requestAnimationFrame(this.step.bind(this)))},t.Game=a}(window);