'use strict'

const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs')

exports.filesToRoutes = function (directory, extension, routePrefix = '') {
  function findFilesInDir(startPath, filter){
    let results = []

    if (!fs.existsSync(startPath)) {
      console.log("no dir ", startPath)
      return
    }

    const files = fs.readdirSync(startPath)

    for (let i = 0; i < files.length; i++) {
      const filename = path.join(startPath, files[i])
      const stat = fs.lstatSync(filename)

      if (stat.isDirectory()) {
        results = results.concat(findFilesInDir(filename, filter)) //recurse
      } else if (filename.indexOf(filter) >= 0) {
        results.push(filename)
      }
    }

    return results
  }

  return findFilesInDir(path.join(__dirname, directory), extension)
    .map((filename) => {
      return filename
        .replace(path.join(__dirname, directory), routePrefix)
        .replace(extension, '')
    })
}

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
