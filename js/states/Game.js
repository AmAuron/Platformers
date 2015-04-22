PlatformGame.Game= function(){

}

PlatformGame.Game.prototype = {
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.add.sprite( 0, 0, 'sky');

		platforms = game.add.group();

		platforms.enableBody = true;

		var ground = platforms.create(0, game.world.height - 64, 'platform');

		ground.body.immovable = true;

		var ledges = platform.create(400, 400, 'platform');

		ledge.body.immovable = true;

		ledge = platforms.create(-150, 250, 'platform');

		ledge.body.immovable = true;

	}
};