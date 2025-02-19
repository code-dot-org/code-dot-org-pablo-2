var ArtistApi;

exports.injectArtistAPI = function(artistApi) {
  ArtistApi = artistApi;
};

exports.moveForward = function(distance) {
  ArtistApi.log.push(['FD', distance, null]);
};

exports.moveBackward = function(distance) {
  ArtistApi.log.push(['FD', -distance, null]);
};

exports.moveUp = function(distance) {
  ArtistApi.log.push(['MV', distance, 0, null]);
};

exports.moveDown = function(distance) {
  ArtistApi.log.push(['MV', distance, 180, null]);
};

exports.moveLeft = function(distance) {
  ArtistApi.log.push(['MV', distance, 270, null]);
};

exports.moveRight = function(distance) {
  ArtistApi.log.push(['MV', distance, 90, null]);
};

exports.moveUpRight = function(distance) {
  ArtistApi.log.push(['MD', distance, 45, null]);
};

exports.moveDownRight = function(distance) {
  ArtistApi.log.push(['MD', distance, 135, null]);
};

exports.moveDownLeft = function(distance) {
  ArtistApi.log.push(['MD', distance, 225, null]);
};

exports.moveUpLeft = function(distance) {
  ArtistApi.log.push(['MD', distance, 315, null]);
};

exports.jumpUp = function(distance) {
  ArtistApi.log.push(['JD', distance, 0, null]);
};

exports.jumpDown = function(distance) {
  ArtistApi.log.push(['JD', distance, 180, null]);
};

exports.jumpLeft = function(distance) {
  ArtistApi.log.push(['JD', distance, 270, null]);
};

exports.jumpRight = function(distance) {
  ArtistApi.log.push(['JD', distance, 90, null]);
};

exports.jumpUpRight = function(distance) {
  ArtistApi.log.push(['JD', distance, 45, null]);
};

exports.jumpDownRight = function(distance) {
  ArtistApi.log.push(['JD', distance, 135, null]);
};

exports.jumpDownLeft = function(distance) {
  ArtistApi.log.push(['JD', distance, 225, null]);
};

exports.jumpUpLeft = function(distance) {
  ArtistApi.log.push(['JD', distance, 315, null]);
};

exports.jumpForward = function(distance) {
  ArtistApi.log.push(['JF', distance, null]);
};

exports.jumpBackward = function(distance) {
  ArtistApi.log.push(['JF', -distance, null]);
};

exports.turnRight = function(angle) {
  ArtistApi.log.push(['RT', angle, null]);
};

exports.turnLeft = function(angle) {
  ArtistApi.log.push(['RT', -angle, null]);
};

exports.globalAlpha = function(alpha) {
  ArtistApi.log.push(['GA', alpha, null]);
};

exports.penUp = function(id) {
  ArtistApi.log.push(['PU', null]);
};

exports.penDown = function(id) {
  ArtistApi.log.push(['PD', null]);
};

exports.penWidth = function(width) {
  ArtistApi.log.push(['PW', Math.max(width, 0), null]);
};

exports.penColour = function(colour) {
  ArtistApi.log.push(['PC', colour, null]);
};

exports.penPattern = function(pattern) {
  ArtistApi.log.push(['PS', pattern, null]);
};

exports.hideTurtle = function(id) {
  ArtistApi.log.push(['HT', null]);
};

exports.showTurtle = function(id) {
  ArtistApi.log.push(['ST', null]);
};

exports.drawShape = function(sticker) {
  ArtistApi.log.push(['shape', sticker, null]);
};

exports.drawSticker = function(sticker) {
  ArtistApi.log.push(['sticker', sticker, null]);
};

exports.setArtist = function(artist) {
  ArtistApi.log.push(['setArtist', artist, null]);
};
