!function(t){function o(t){this.scale=t.scale,this.x=t.left,this.y=t.bottom,this.colour=t.colour}o.prototype=Object.create(GameObject.prototype),o.prototype.constructor=o,o.prototype.draw=function(t,o){t.fillStyle=this.colour,t.font="16px Courier",t.textAlign="right",t.fillText(function(t){return Math.floor(.1*t)}(o),this.x,this.y)},t.ScoreBoard=o}(window);