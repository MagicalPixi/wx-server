/**
 * Created by zyg on 15/11/10.
 */
var path = require('path');
var qnUpload = require('gulp-qiniu');

var src = path.resolve(__dirname,'../public/images/hitRunMan/background/startTitle.png');
var audioSrc = path.resolve(__dirname,'../public/audio/*');

var optionDir = path.resolve(__dirname,'../uploadDir/');

module.exports = function(gulp){
  gulp.task('qiniu',function(){
    gulp.src(src).pipe(qnUpload({
      accessKey: "EyEwm6Bjadr4ojSFxpKWt6k-PoyT99D5l_qMCEaL",
      secretKey: "xOUHlBygVg_dIxPcgWmEVu7GG5jl_XVQ57mrV7o0",
      bucket: "guoshencheng",
      private: false
    },{
      dir:optionDir,
      versioning: true,
      versionFile: './cdn.json'
    }))
  });
};