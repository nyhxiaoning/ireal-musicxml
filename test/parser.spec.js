import assert from 'assert';
import fs from 'fs';
import {Playlist} from '../src/parser';

describe('Parser', function() {
  it('should parse an iReal Pro exported playlist', function() {
    const playlist = new Playlist(fs.readFileSync('test/data/playlist.html', 'utf-8'));
    assert.strictEqual(playlist.name, "Jazz Combo");
    assert.strictEqual(playlist.songs.length, 6);
    assert.deepStrictEqual(playlist.songs.map(s => s.composer), [
      "Cedar Extra Name Walton",
      "Bobby Timmons",
      "Jeremy Udden",
      "Antônio-Carlos Jobim",
      "Horace Silver",
      "Miles Davis"
    ]);
  });

  it('should parse the Jazz 1350 playlist', function() {
    const playlist = new Playlist(fs.readFileSync('test/data/jazz1350.txt', 'utf-8'));
    assert.strictEqual(playlist.songs.length, 1350);
  });

  it('should parse the irealbook:// format', function() {
    const playlist = new Playlist(fs.readFileSync('test/data/irealbook.txt', 'utf-8'));
    assert.strictEqual(playlist.songs.length, 1);
  });
});
