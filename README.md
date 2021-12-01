# faire-test

## Requirements

Require [nodeJS](https://nodejs.org/en/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

## Getting Started

Install dependencies using `npm`:

```
npm install
```

Or `yarn`:

```
yarn install
```

### Run test

```
npm run test
```

Or

```
yarn test
```

## File Structure

    .
    ├──cypress
        ├── modals    # Element selectors and page objects
        ├── support   # Custom cypress commands
        ├── tests     # Tests
    ├── cypress.json  # cypress config
    └── README.md

## Future Improvement

- The selector for some elements are not quite robust and meaningful (brand location, brand established year). Some selectors contain hashed code which could change in the future.
- Use page objects to coupled the test and the HTML UI and improve reusability (though it's not recommended by the developers from cypress)
- Find more reliable way to scroll to the top selling brands in the Front page. The top selling brands are not loaded unless they're scrolled into the view. Currently, the percentage of the page is used for scrolling
- More test with better coverage can be added based on the importance of the use flow. Some checks (like input validation for search) can be covered in lower level test like unit test.
