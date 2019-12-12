# [alexgalea.ca](https://alexgalea.ca/)

If project breaks, run `react-static create` and use the `basic` template as a starting point. Then do `yarn add styled-components`. Using version 6.3.3 of react static and version 1.13.0 of yarn.

TODO:
 - Set up site on AWS
 - Add logo to homepage

## Developing

Launch development server with `react-static start`. But you can also use yarn and I find that more reliable:

`yarn start`

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
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths '/*'
```

