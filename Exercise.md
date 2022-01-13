## Live version

I live version can be seen here: https://devtoni-dreadful-tomato.vercel.app/

## Instructions

### Requirements

- NodeJS version LTS Fermium (^15)
- Npm (^7)

### Install dependencies

From the root of the project run:

```
npm install
```

_This command will install all dependencies needed to run and build the project locally._

### Compiles and hot-reloads for development

From the root of the project run:

```
npm run start
```

_This command will compile and hot-reload development environment._

> Default port 3000

### Compiles and minifies for production

From the root of the project run:

```
npm run build
```

_This command will compile and minify the source code to be ready and optimized for production environment._

### Run your unit tests

From the root of the project run:

```
npm run test
```

### Run your e2e tests

From the root of the project run:

```
npm run test:e2e
```

\*This command run cypress in open mode, you will need to have opened the project in development as it points to localhost:3000


----

## Solution

### Some decisions I've took

- I've decided to use TypeScript as it will help to the team writing less bugs due to the static typing, have better documentation and improve code speed as it adds intellisense.
- The assets folder was moved to the src, so I can use it without changing any configuration in the project setup.
- Fetching the content
  - Due to the CORS problem with local hostname and gitlab, I've decided to setup [msw](https://mswjs.io/), so I can write the services responsible to fetch data as they will be in production and msw will intercept the endpoints that are defined inside this tool and serve a fixture instead.
    - At this moment it is setup for all environments, but ideally it would be only for dev
- Regarding to scss
  - I've setup some global variables to help avoid repeat the same many times
  - I didn't follow any specific pattern, but in a real scenario I would have a better sense of this.
- Fonts
  - I've used open sans
- Services
  - There is only one service that fetches the data for the content
    - Here there can be different opinions of how to handle errors, for this test I've used try-catch, log the error and return null, although this sceneraio in the UI the error is not handled properly
- Context
  - In order to share the same content data across movies and series, I've created a context that is responsible to fetch the initial content data, provides filtering and pagination for the results.
    - In real scenarios I would think better what can we do here, probably going more pragmatic using a custom hook and fetch content data in every page would be enough and more flexible.
- Routes
  - There is a home page showing whether we want to go to the series or movies page.
  - There is an intermediate page, called search.
    - This page is responsible to:
      - render the views of search and movies.
      - provides the layout and content context.
      - add /search path to the route.
  - Movies and Series pages.
    - Renders the content.
- Components, nothing special, although there are some important design decisions in some of them
  - Header and Navigation
    - The Header accepts a children element that can be used for the navigation
    - The Navigation prints a list of items that at this moment are coupled to the component but in a future the data might come from outside in form of json or compound components
      - The Navigation also accepts a children element that can be used to print more elements inside
    - I've use the compound pattern so Navigation is an Element of Header
    - The Header used in movies and series page adds the Filter action, so it will have available the content context to interact with the data in a future
  - DateYearPicker
    - Is a wrapper of react-datepicker so it can be replaced in a future if it is needed
- Carbon design components
  - I had little time to explore the library and I haven't used it extensivelly, I would prefer to get rid of the library but I tried to use some things like the layout grid and some component.
- Tests
  - There are some UI tests and also I provide a very basic example of e2e testing the filter by text series.
- Responsiveness and styles
  - At this moment the app is not responsive and the UI is not accurate, but it is functional


### Some thoughts

- The test is not very complicated and it was fun, altough it implies some work to have it functional.
- I think that the constraint of using Carbon system unnecessarily loads the developer with extra time as she/he would need to know about the library.
