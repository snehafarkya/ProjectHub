# ProjectHub
ProjectHub is an app build using Next js App Router, Tailwind CSS, and TypeScript. This app has a dashboard that contains the list of projects. 

## Setup Guide
1. First clone this repo using `git clone <repo.url>` .
2. Go to any editor, let's say VSCode
3. Do `npm i` in terminal
4. Run the build using `npm run build`
5. Finally, to run locally, use `npm run dev` 
6. The dashboard will open on `localhost:3000` 

## Assumptions
- The project data is stored in `data.ts` file. It has all the array's or hardcode data that is used in the app. 
- A recent activity and task summary component is also added to display a production level product. You can find names of the team members, and overall completeness. 

## Features
- This app can search the project using project name and client name. 
- It also includes multiple filtering, that means you can view projects based on the status of it. It is built on client side.
- It also has a lot of micro-interactions like button hovering, or clicking, focus states, svg dynamic filling, etc.
- On clicking the profile in top-right section, a dropdown opens with few items, and a logout. 
- On clicking card, a dynamic page opens that is specific to that project and has all the details about it. 
- Empty states are handled well in filtering and displaying data.
- Long project names have been clamped to a single line. 
- Reusable components are used to optimize app. 
- The app is mobile-responsive as well. 

## Github: 
The project is hosted on GitHub and here is the link: [Github](https://github.com/snehafarkya/ProjectHub)

## Live Preview: 
The project is deployed of vercel and here is the link: [Live Preview](https://projecthubdash.vercel.app/)