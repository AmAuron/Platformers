var PlatformGame = function(){};

PlatformGame.Boot= function(){};

PlatformGame.Boot.prototype = {

	preload: function(){
		this.load.image('logo', 'assets/images/logo.png');
		this.load.image('preloaderBar', 'assets/images/progressbar.png');
	},

	create: function(){
		this.game.stage.backgroundColor = '#000000';

		this.input.maxPointers = 1;

		if(this.game.device.desktop){
			this.scale.pageAlignHorizontally = true;
		}
		else{
			  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		      this.scale.minWidth = 568;
		      this.scale.minHeight = 600;
		      this.scale.maxWidth = 2048;
		      this.scale.maxHeight = 1536;
		      this.scale.forceLandscape = true;
		      this.scale.pageAlignHorizontally = true;
		      this.scale.setScreenSize(true);
		}

		this.state.start('Preloader');
	}
};