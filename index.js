const fs = require('fs'),
      path = require('path');

const primary = '#ff3366',
      secondary = '#3399ff',
      backgroundColor = '#181b1d',
      // backgroundColor = '#141618',
      foregroundColor = '#fdfdff',
      selectionColor = '#121315';

const colors = {
  black: '#08090a',
  red: primary,
  green: '#5fffaf',
  yellow: '#ffd94c',
  blue: secondary,
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

exports.decorateConfig = config => Object.assign(config, {
  colors,
  backgroundColor,
  foregroundColor,
  cursorColor: primary,
  selectionColor,

  fontWeight: 'normal',
  fontSize: 12,

  transparentBg: { WebkitFilter: 'blur(5px)', opacity: '0.3' },
  
  css: `
    ${config.css || ''}

    ${fs.readFileSync(path.join(__dirname, 'style.css'))}

    
  `

  //${config.cozy ? fs.readFileSync(path.join(__dirname, 'cozy.css')) : ''}
});
