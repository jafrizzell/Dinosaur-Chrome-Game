!function(t){function i(t){this.scale=t.scale,this.x=t.left,this.y=t.bottom,this.colour=t.colour,this.leftSize=t.leftSize,this.centerSize=t.centerSize,this.rightSize=t.rightSize}i.prototype=Object.create(GameObject.prototype),i.prototype.constructor=i,i.prototype.draw=function(t,i){var e=this.x-i,l=this.y,c=this.scale;t.fillStyle=this.colour;var h=15*this.centerSize;t.fillRect(e+6*c,l-(20+h)*c,6*c,h*c),t.fillRect(e+7*c,l-(20+h+1)*c,4*c,1*c),t.fillRect(e+6*c,l-20*c,6*c,20*c),h=15*this.leftSize,t.fillRect(e,l-(15+h)*c,4*c,h*c),t.fillRect(e+1*c,l-(15+h+1)*c,2*c,1*c),t.fillRect(e+4*c,l-19*c,4*c,4*c),h=15*this.rightSize,t.fillRect(e+14*c,l-(15+h)*c,4*c,h*c),t.fillRect(e+15*c,l-(15+h+1)*c,2*c,1*c),t.fillRect(e+12*c,l-19*c,4*c,4*c)},i.prototype.colliders=function(t){return[{x:this.x,y:this.y,width:17*this.scale,height:(20+15*Math.max(this.centerSize,this.leftSize,this.rightSize))*this.scale}]},t.Cactus=i}(window);