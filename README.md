# Engaging Networks Swap Amounts Standalone Script

A simple script that allows you to swap the giving amounts with a list provided via URL.

## How to use

1 - Add the script below to your donation page.

```html
<script src="https://cdn.jsdelivr.net/gh/4site-interactive-studios/en-swap-amountg@latest/dist/en-swap-amounts.js"></script>
```

2 - Add the custom amounts to the URL. Possible values are:

- `single`: Comma separated list of one-time amounts.
- `single-default`: Default amount for one-time donations.
- `monthly`: Comma separated list of monthly amounts.
- `monthly-default`: Default amount for monthly donations.

Example: `https://example.com/donate?single=25,50,100,150,200&single-default=100&monthly=5,10,50,100,500&monthly-default=10`

3 - You can also specify custom fields for the amount lists and default values.  
To do that, you just need to add a Code Block with the following object:

```javascript
// You can use the same field name for both single and monthly amounts.
var enSwapAmountsOptions = {
  "single": "FIELD_NAME_1",
  "single-default": "FIELD_NAME_2",
  "monthly": "FIELD_NAME_3",
  "monthly-default": "FIELD_NAME_4",
};
```

When you specify custom fields, the script will first look for the value in the custom field, and if it doesn't find it, it will try to grab the amounts list from the URL.

## Development

Your js code must be on the `src/app` folder.

## Install Dependencies

1. `npm install`

## Deploy

1. `npm run build` - Builds the project
2. `npm run watch` - Watch for changes and rebuilds the project

It will create a `dist` folder, where you can get the `en-swap-amounts.js` file and publish it.
