const gulp = require('gulp'); // Подключение гульпа

const imagesSources = './src/images/**/*';

/**
 * Это описание задачи, которая будет переносить наши картинкив папку dist
 * @returns {*}
 */
let publishImages = (destinationDir) => {
    gulp.src(imagesSources).pipe(gulp.dest(destinationDir +'images'))
};

module.exports = publishImages;