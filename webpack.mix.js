const mix = require('laravel-mix');

mix.styles([
	'resources/kafe/css/bootstrap.min.css',
	'resources/kafe/css/style.css'
], 'public/css/styles.css');

mix.scripts([
    'resources/kafe/js/jquery-3.3.1.min.js',
    'resources/kafe/js/bootstrap.min.js',
	'resources/kafe/js/image-effect.js',
	'resources/kafe/js/map.js',
	'resources/kafe/js/smooth-scroll.js'
], 'public/js/scripts.js');
