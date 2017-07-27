import Main from './main';
import Content from './content';
import Contenter from './contenter';
import Contentsan from './contentsan';
import Contentsi from './contentsi';

module.exports = {
  path: '/home',
  component: Main,
  children: [
    { path: '', component: Content },
    { path: 'indexer', component: Contenter },
    { path: 'indexsan', component: Contentsan },
    { path: 'indexsi', component: Contentsi }
  ]
};
