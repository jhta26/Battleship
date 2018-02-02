import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/ShipPickComponent.story');
}
configure(loadStories, module);





