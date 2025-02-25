let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
console.log(playlist);

playlist.unshift("New Song");
console.log(playlist);

playlist.pop();
console.log(playlist);

playlist.copyWithin(playlist.length - 2, 0, 2);
console.log(playlist);

let otherPlaylist = ["Other 1", "Other 2", "Other 3"];
let combined = playlist.concat(otherPlaylist);
console.log(combined);
