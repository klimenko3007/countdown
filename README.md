# Countdown App

Welcome to the Countdown App! Whether you want to keep track of an important event or put pressure
on yourself to meet a deadline, this app is for you.

## Features

- **Track Important Events**: Add the date and name of your event, and the app will start a
  countdown.
- **Real-Time Updates**: Watch the clock tick down to your specified end date in real-time.
- **Responsive Design**: The app works seamlessly in both portrait and landscape modes.

## Countdown Display

The countdown starts from the current time and displays the time remaining to your specified end
date in the following format:

- **Days**
- **Hours (h)**
- **Minutes (m)**
- **Seconds (s)**

## Test application

To test the application have a look at
[Countdown App](https://countdown-to-event-klimenko.netlify.app/)

## Watch a video

To get a quick look at application's functionality, watch the videos below.

### Using application for the first time

https://github.com/klimenko3007/countdown/assets/73106885/c3964aa7-9117-4dfa-8536-9b3b6db0535d

### Entering events in the past
https://github.com/klimenko3007/countdown/assets/73106885/33d97480-12b8-4170-a87a-f5d093021ba3

### Countdown 0 
https://github.com/klimenko3007/countdown/assets/73106885/affad659-7e16-4c77-9211-c6279a93474a


## Test application locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
17.3.6.

### Prerequisites

Before setting up the application, make sure you have the following installed:

- **Node.js**: Version v18.13 or above
- **Angular CLI**: Version 17.3.6

### Setup Instructions

1. Clone the repository `git clone git@github.com:klimenko3007/countdown.git`
2. Navigate to the project directory `cd <project-folder>`
3. Install dependencies `npm install`
4. Run the development server `ng serve`
5. Open your browser and navigate to `http://localhost:4200/`

## Future Improvements

The app could benefit from further improvements:

1. **Improvement in Design:** Enhance the user interface, including a more prominent submit/update
   button. Updating the title and date on blur is not the most intuitive method.
2. **Year Handling:** Include the option to display years in the countdown. The specified format
   currently only includes days and does not calculate years. It would be beneficial to show years,
   if applicable.
3. **Past Date Handling:** mplement a better mechanism to handle cases where the entered date is in
   the past. Currently, it only states that the event has already occurred. A better approach would
   be to change the message to "Time since...".
4. **Empty State:** Design a proper empty state for the application when no events are added. The
   current "default" strings are not the most user-friendly way of handling this situation.
5. **Test Coverage:** Add test coverage to ensure the app is bug-free.
