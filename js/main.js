var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', PlatformGame.Boot);
game.state.add('Preloader', PlatformGame.Preload);
game.state.add('Game', PlatformGame.Game);

game.state.start('Boot');