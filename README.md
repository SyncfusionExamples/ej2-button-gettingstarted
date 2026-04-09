# Essential JS 2 Button Getting Started 

The application contains Essential JS 2 button component for preview and all common settings are preconfigured.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 8.x or later)
- npm (Node Package Manager)

## Project Structure

```
ej2-button-gettingstarted-master/
├── src/
│   ├── app/
│   │   └── app.ts
│   ├── index.html
│   └── system.config.js
├── package.json
├── tsconfig.json
└── gulpfile.js
```

## Getting Started

To get started you need to clone the `ej2-buttongettingstarted` repository.

```
git clone https://github.com/SyncfusionSamples/ej2-button-gettingstarted.git quickstart
cd quickstart
```

## Installing

We can get all the Essential JS 2 components in a single npm package [`ej2`](https://www.npmjs.com/package/@syncfusion/ej2).

We already configure the required packages in the `package.json` file.

You can run the below command to install all dependent packages related to this seed project.

```
npm install
```

## Running

The application is configured with `browser-sync`, so it will serve the web application in your default browser.

We used `SystemJS` for module loading.

You can use the below npm script to run the web application.

```
npm run start
```

## Features

This quickstart project includes:
- Pre-configured Essential JS 2 Button component
- TypeScript support for type-safe development
- SystemJS module loader integration
- Browser-sync for live reloading during development
- Gulp-based build automation

## Configuration

The project uses `system.config.js` to configure module loading and map the Syncfusion EJ2 packages. All component configurations are set up in the `src/app/app.ts` file, making it easy to customize button properties and behaviors.
