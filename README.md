# Lambda Psi Rho Website

## Making Changes

All folders that matter will be in the `src` folder.
There is no need to look at anything outside of the `src` folder.

### Updating classes/names of brothers
1. Go to the `data` folder and open the `foundingChaper.ts` file
2. Classes are in chronological/alphabetical order, scroll all the way down to add a new class
They must be in this format, copy and paste:
```
  {
    className: 'Test',
    greekLetter: 'A',
    brothers: [
      'Brother Name',
      'Brother Name',
    ],
  },
```
3. If a brothers name has a typo, just `Ctrl + F` that brother and edit

### Updating info on a page
1. Go to the `pages` folder
2. Each folder within the `pages` folder matches to the nav bar tabs
3. Once youre on the correct page, edit or add whatever you need