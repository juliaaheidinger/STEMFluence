import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Header from '../components/Header'
import Card from '../components/Card'

storiesOf('Header', module).add('default', () => (
  <Header text={text('Headline', 'STEMfluence')} />
))

storiesOf('Card', module).add('default', () => (
  <Card
    imgURL={text('img', 'https://source.unsplash.com/random')}
    hashtag={text('campaignHashtag', '#CampaignHashtag')}
    productName={text('productName', 'productName')}
    campaignStatus={text('campaignStatus', 'campaignStatus')}
    hasTwitter={boolean('twitterEnabled', true)}
    hasInstagram={boolean('instaEnabled', true)}
    hasYoutube={boolean('youtubeEnabled', true)}
    isBookmarked={boolean('bookmarkEnabled', false)}
  />
))

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
