/**
*
* Created by RosApr on 16/11/7.
*/
"use strict";
 var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    less = require("gulp-less"),
    uglify = require("gulp-uglify"),
    minifycss = require("gulp-minify-css"),
    autoprefixer = require("gulp-autoprefixer"),
    postcss = require("gulp-postcss"),
    px2rem = require("postcss-px2rem"),
    processors = [px2rem({remUnit: 75})];

    gulp.task("less", function(){
        gulp.src("less/*.less")
            .pipe(less())
            .pipe(postcss(processors))
            .pipe(minifycss())
            .pipe(autoprefixer({
              browsers: ["last 2 versions", "Android >= 4.0"],
              cascade: true,
              remove: true
            }))
            .pipe(gulp.dest("assets/css"))
    });

    gulp.task("js", function(){
      gulp.src("jsLib/*.js")
          .pipe(uglify())
          .pipe(gulp.dest("assets/js"))
    });

    gulp.task("default", function(){
        var watcherLess = gulp.watch("less/*.less", ["less"]),
           watcherJs = gulp.watch("jsLib/*.js", ["js"]);

        livereload.listen();
        watcherLess.on("change", livereload.changed);
        watcherJs.on("change", livereload.changed);
    });
