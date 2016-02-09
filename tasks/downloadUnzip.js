/**
 * Created by zyg on 16/2/1.
 */
var path = require('path');

var request = require('request');

var rename = require('gulp-rename');
var download = require('gulp-download');
var unzip = require('gulp-unzip');

var downloadMaterialNames = [
  'turnback'
];

var downloadUrls = downloadMaterialNames.map(function (name) {
  return 'http://www.magicalpixi.com/api/buildDownloadZip?name='+name;
});

var saveSprites = path.resolve(__dirname,'../public/sprites/');

module.exports = function (gulp) {
  gulp.task('down', function () {

    var i = 0;

    download(downloadUrls)
      .pipe(rename(function (path) {
        path.extname = '.zip';
        return path;
      }))
      .pipe(unzip())
      .pipe(gulp.dest(function (args) {

        var nameIndex = parseInt(i++/4);

        return path.join(saveSprites,'/'+downloadMaterialNames[nameIndex] + '/');
      }));
  });
};