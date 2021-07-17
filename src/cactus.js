(function(namespace) {
	function Cactus(options) {
		this.scale = options.scale;
		this.emote = options.emote;
		this.x = options.left;
		this.y = options.bottom;
		this.colour = options.colour;
		this.leftSize = options.leftSize;
		this.centerSize = options.centerSize;
		this.rightSize = options.rightSize;
	}

	Cactus.prototype = Object.create(GameObject.prototype);
	Cactus.prototype.constructor = Cactus;

	Cactus.prototype.draw = function(context, offset) {
		var x = this.x - offset,
			y = this.y,
			scale = this.scale;

		// TODO: replace this with the twitch-emote api
        for (let i = 0; i < this.emote.length; i++) {
			context.drawImage(this.emote[i].gif.canvas, x+40*i, y, scale*40, scale*40);
		}
	};

	Cactus.prototype.colliders = function(offset) {
		return [{
			x: this.x,
			y: this.y,
			width: 17 * this.scale,
			height: (20 + (15 * Math.max(this.centerSize, this.leftSize, this.rightSize))) * this.scale
		}];
	};

	namespace.Cactus = Cactus;
}) (window);