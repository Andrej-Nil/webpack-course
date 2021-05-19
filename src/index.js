import * as $ from 'jquery';
import Post from '@models/Post';
//import json from './assets/json';
//import xml from './assets/data.xml';
//import csv from './assets/data.csv'
import logo from './assets/webpack-logo.png';
import './babel';
import './styles/styles.css';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', logo);

$('pre').addClass('code').html(post.toString());
console.log('Post to String: ', post.toString());
console.log('Post to String: ', post.toString());
//console.log(json);
//console.log(xml);
//console.log(csv);
//console.log(csv);