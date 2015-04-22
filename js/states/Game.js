PlatformGame.Game= function(){

}

PlatformGame.Game.prototype = {
	create: function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//begin sky creation
		this.game.add.sprite( 0, 0, 'sky');

		//begin platforms creation
		this.platforms = this.game.add.group();

		this.platforms.enableBody = true;

		var ground = this.platforms.create(0, game.world.height - 64, 'platform');

		this.ground.body.immovable = true;

		var ledges = this.platform.create(400, 400, 'platform');

		this.ledge.body.immovable = true;

		this.ledge = platforms.create(-150, 250, 'platform');

		this.ledge.body.immovable = true;

		this.player = this.game.add.sprite(32, game.world.height - 150, 'dude');

		this.game.physics.arcade.enable(player);

		this.player.body.bounce.y = 0.2;
		this.player.body.gravity.y = 300;
		this.player.body.collideWorldBounds = true;

		this.player.animations.add('left', [0,1,2,3], 10, true);
		this.player.animations.add('right', [5,6,7,8], 10, true);
	},

	update: function(){
		this.game.physics.arcade.collide(player, platforms);
	}
};