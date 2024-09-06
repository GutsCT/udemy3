import {src,dest,watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css( done ){
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) )//para compilar, da control dde como ejecuta las funciones
        .pipe(dest('build/css'))//destino
    done()
}

export function dev(){//para el watch
    watch( 'src/scss/**/*.scss',css )//se pueden tener varios para diferentes tareas
}