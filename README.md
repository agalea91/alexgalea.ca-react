# [alexgalea.ca](https://alexgalea.ca/)

Use only YARN for this project, not NPM!

If project breaks, run `react-static create` and use the `basic` template as a starting point. Then run the following to add packages:

```
yarn add styled-components
yarn add react-toastify
```

Using version 6.3.3 of react static and version 1.13.0 of yarn.

## Developing

This project uses yarn (as opposed to npm). You can replace "npm install" with "yarn add" when installing packages.

Launch development server with `react-static start`. But you can also use yarn and I find that more reliable:

```
yarn start
```

## Building/updating site

Building with the react-static CLI does not currently work. Use yarn:
```
yarn build
```
After running this, the website will be avaiable in `dist`. Make a copy of that:
```
# e.g.
cp dist dist-2019-04-01
```
Delete the current bucket (optional):
```
aws s3 rm s3://alexgalea.ca --recursive
```
Upload the new source code:
```
aws s3 sync --acl public-read --sse --delete dist s3://alexgalea.ca
```
Invalidate cloudfront cache
```
aws cloudfront create-invalidation --distribution-id E2JTJP15FWKFBS --paths '/*'
```

