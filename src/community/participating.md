## Get involved!

You are invited to join the Pangeo community!

- Join the [discourse](https://discourse.pangeo.io/)
- Join a [community meeting](https://www.pangeo.io/meetings)
- Come to the [showcase talks](https://www.pangeo.io/showcase)
- Contribute to a [working group](https://www.pangeo.io/meetings)
- Attend an [event](https://www.pangeo.io/meetings)
- Talk with developers in the [Pangeo ecosystem](https://www.pangeo.io/#ecosystem) through GitHub
- Support Pangeo by [donating](https://www.pangeo.io/#donate)

## Organizing events

### Pangeo Showcase

We host showcase talks each spring and fall. Here are the steps to organizing the showcase talks:

- 1-3 months before the fall/spring series
  - Solicit showcase topics from the community
  - Check on the [results](https://docs.google.com/spreadsheets/d/1avK1VnXOXIlwlIaUHBWdv7qH-1AwEiEbikBv8wCb_WQ/edit?usp=sharing) from [the speaker interest form](https://docs.google.com/forms/d/e/1FAIpQLSddb5s_nM5So48mTk1SkTxRPKfE0fvdx73ZsyAt--v87BK3vw/viewform)
  - Reach out to potential speakers with an invitation to present
    - Send an introductory invitation
    - If they are interested, provide a few dates for the person to chose from
- When a talk is confirmed
  - Update the color and add the date on the [speaker interest spreadsheet](https://docs.google.com/spreadsheets/d/1avK1VnXOXIlwlIaUHBWdv7qH-1AwEiEbikBv8wCb_WQ/edit?usp=sharing)
  - Add the talk to the [Pangeo showcase page](https://www.pangeo.io/showcase)
    - Submit a pull request that changes [https://github.com/pangeo-data/pangeo.io/blob/main/src/data/showcase-talks.js](https://github.com/pangeo-data/pangeo.io/blob/main/src/data/showcase-talks.js). The showcase talks are automatically ordered by date on the website.
  - Ask the speaker to fill out the [speaker information form](https://docs.google.com/forms/d/e/1FAIpQLSf_wb5TrTJ6MthH9rzOJm13Qg82QzCEGWSwGw-_JnDCoQrL1g/viewform)
- 1 week before the talk
  - Announce the talk on the Pangeo Discourse (e.g., [Arkouda announcement](https://discourse.pangeo.io/t/pangeo-showcase-arkouda-as-an-xarray-backend-for-hpc/4693))
  - Update the Pangeo showcase page with the link to the Discourse post
    - Submit a pull request that changes [https://github.com/pangeo-data/pangeo.io/blob/main/src/data/showcase-talks.js](https://github.com/pangeo-data/pangeo.io/blob/main/src/data/showcase-talks.js).
- 1 day before the talk
  - Announce the talk on the Pangeo X account
  - Add the talk to the [weekly Pangeo check-in notes](https://docs.google.com/document/d/1BkL0arf1Lz6fHgVBEJNxKbFmVN8glNQXmDKdsuT0GcU/edit?tab=t.0#heading=h.3ic01bys7ty2) using the template at the end of the doc
- Day of the talk
  - Join the meeting using a NumFOCUS zoom account at least 5 minutes early
  - Explain that we usually start a few minutes after the hour
  - Ask people to sign in to the [weekly Pangeo check-in notes](https://docs.google.com/document/d/1BkL0arf1Lz6fHgVBEJNxKbFmVN8glNQXmDKdsuT0GcU/edit?tab=t.0#heading=h.3ic01bys7ty2)
  - Ask the presenter to share their screen before the recording starts
  - Start the recording
  - Watch the talk
  - End the recording and moderate questions
  - Switch to the 60 second updates
- After the talk
  - Trim the video (handbrake is an open source tool for this)
  - Create a framegrab for YouTube (ffmpeg is an open source tool for this)
  - Upload the video to the Pangeo YouTube channel
    - Expand options in order to choose creative commons rather than the default YouTube license
  - Ask the speaker for their slides
  - Upload the video and slides to the Pangeo Zenodo community
  - Add a link to the YouTube video and slides on the original discourse post
- After the fall quarter
  - Make an archival copy of the weekly check-in notes

Potential gotcha's

- Only people with NumFOCUS Zoom accounts can record the talks. The list of people with accounts is available at [https://github.com/pangeo-data/bus-factors](https://github.com/pangeo-data/bus-factors)
- Only the zoom meeting owner can access the cloud recordings, regardless of who presses record
