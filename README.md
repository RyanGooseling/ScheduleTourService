# ScheduleTourService

Module used to review and schedule a home tour on Bluefin, a Refin clone.

## Usage

The "home" status for this module includes four main sections. From top to bottom they are:
1) The calendar carousel
2) The type of tour
3) The schedule tour button
4) The start an offer button

Upon hitting the "schedule a tour" button a modal window will be rendered with two additional carousels. The each carousel component consists of independent, nested components as follows:
1) the slide
2) the left arrow
3) the right arrow


## Requirements

- Node 6.13.0

## Development

The "start an offer" button and the "tour type" sections are self contained and have no nested components.

### Installing Dependencies

From within the root directory:

npm install -g webpack
npm install
npm run db:setup
npm run build
npm run start

