import campaignData from '../data/campaignData.json'

export default {
  teaserData: loadTeaserData() || campaignData,
  applicationData: loadApplicationData() || [],
  campaign: '',
  name: '',
  address: '',
  email: '',
  plattform: '',
  handle: '',
  followers: '',
  textConnection: '',
  textPostIdea: '',
  fee: '',
  termsAccepted: false
}

function loadTeaserData() {
  try {
    return JSON.parse(localStorage.getItem('teaserData'))
  } catch (err) {
    return console.log(err)
  }
}

function loadApplicationData() {
  try {
    return JSON.parse(localStorage.getItem('applicationData'))
  } catch (err) {
    return console.log(err)
  }
}
