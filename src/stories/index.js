import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Card from '../components/Card'

//import StyleBox from './StyleBox'

storiesOf('Card', module).add('default', () => (
  <Card
    imgURL={text('img', 'https://source.unsplash.com/random')}
    hashtag={text('Campaign Hashtag', '#CampaignHashtag')}
    productName={text('product Name', 'productName')}
    campaignStatus={text('campaign Status', 'campaignStatus')}
    hasTwitter={boolean('TwitterEnabled', true)}
    hasInstagram={boolean('InstaEnabled', true)}
    hasYoutube={boolean('YoutubeEnabled', true)}
    isBookmarked={boolean('BookmarkEnabled', true)}
  />
))

// storiesOf('ProgressBar', module)
//   .add('at 10%', () => <ProgressBar width={0.1} />)
//   .add('at 50%', () => <ProgressBar width={0.5} />)
//   .add('at 100%', () => <ProgressBar width={1} />)

// storiesOf('Todo', module).add('undone', () => (
//   <ListItem>
//     <Todo
//       text={text('undone Todo', 'Hello World')}
//       done={boolean('Disabled', false)}
//       onClick={action('toggleDone')}
//     />
//     <Delete onClick={action('deleteListItem')} />
//   </ListItem>
// ))

// storiesOf('Input', module).add('with text', () => (
//   <Input onEnter={action('show input')} />
// ))

// storiesOf('ui/Button', module).add('default', () => (
//   <React.Fragment>
//     <Button>{text('Label', 'Hello world')}</Button>
//   </React.Fragment>
// ))

// storiesOf('ui/Input', module).add('default', () => (
//   <React.Fragment>
//     <Input onEnter={action('onEnter')} />
//   </React.Fragment>
// ))

// storiesOf('ProgressBar', module).add('default', () => (
//   <React.Fragment>
//     <ProgressBar
//       percentage={number('percentage', 0, {
//         range: true,
//         min: 0,
//         max: 1,
//         step: 0.01
//       })}
//     />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 2} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={2 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1} />
//   </React.Fragment>
// ))

// storiesOf('Separator', module).add('default', () => (
//   <React.Fragment>
//     <Separator text="One" />
//     <StyleBox h={40} />
//     <Separator text="Two words" />
//   </React.Fragment>
// ))

// storiesOf('ToggleButton', module).add('default', () => (
//   <React.Fragment>
//     <ToggleButton
//       isDefault={boolean('isDefault', true)}
//       onClick={action('onClick')}
//       defaultText={text('defaultText', 'Click me')}
//       alternativeText={text('alternativeText', 'I was clicked')}
//     />
//   </React.Fragment>
// ))
