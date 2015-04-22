PlatformGame.Preload = function(){
	this.ready = false;
};

PlatformGame.Preload.prototype = {
	preload: function(){

		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 225, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		//Loading de imagens

		this.load.image('diamond', 'assets/images/diamond.png');
		this.load.image('firstaid', 'assets/images/firstaid.png');
		this.load.image('platform', 'assets/images/platform.png');
		this.load.image('sky', 'assets/images/sky.png');
		this.load.image('star', 'assets/images/star.png');

		//Loading Spritesheets

		this.load.spritesheet('dude', 'assets/images/dude.png', 32, 48, 9);
		this.load.spritesheet('baddie', 'assets/images/baddie.png', 32, 32, 4);

		this.load.onLoadComplete.add(this.onLoadComplete, this);
	},

	create: function(){
		this.preloadBar.cropEnabled = false;
	},

	update: function(){
		if(this.ready==true){
			this.state.start('Game');
		}

	},

	onLoadComplete: function(){
		this.ready = true;
	}
};