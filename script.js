// const player = new Plyr('audio', {controls: ['play', 'progress', 'current-time']});

const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p, {controls: ['play', 'progress', 'current-time']}));

// const players = Plyr.setup('.js-player');
