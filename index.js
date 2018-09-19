const fs = require('fs'),
      path = require('path');

const colors = {
  black: '#08090a',
  red: '#ff3366',
  green: '#5fffaf',
  yellow: '#ffd94c',
  blue: '#3399ff',
  magenta: '#a764ff',
  cyan: '#98d7f8',
  white: '#f9f9ff',
  lightBlack: '#202326',
  lightRed: '#ff809f',
  lightGreen: '#acffd5',
  lightYellow: '#ffe47f',
  lightBlue: '#80bfff',
  lightMagenta: '#c497ff',
  lightCyan: '#b0e0fa',
  lightWhite: '#fefeff'
}

const primary = colors.red,
      secondary = colors.blue,
      backgroundColor = '#181b1d',
      foregroundColor = '#fdfdff',
      selectionColor = '#121315';

exports.decorateConfig = config => Object.assign(config, {
  colors,
  backgroundColor,
  foregroundColor,
  cursorColor: primary,
  selectionColor,

  fontWeight: 'normal',
  fontSize: 12,
  
  css: `
    ${config.css || ''}

    ${fs.readFileSync(path.join(__dirname, 'style.css'))} 
  `
});
