import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Responcy from '../index';

storiesOf('Responcy', module)
  .add('default view', () => (
    <Responcy
      src='[{"size": "300", "src": "https://assets2.ello.co/uploads/asset/attachment/5385109/ello-hdpi-c8b0b09b.jpg"}, {"size": "400", "src":"https://assets1.ello.co/uploads/asset/attachment/5384992/ello-xhdpi-24587135.jpg"}, {"size": "500", "src":"https://assets2.ello.co/uploads/asset/attachment/5384706/ello-optimized-5b0e0a15.jpg"}]'>
    </Responcy>
  ));
