echo "aws s3 sync --acl public-read --sse --delete dist s3://alexgalea.ca"
aws s3 sync --acl public-read --sse --delete dist s3://alexgalea.ca
echo "aws cloudfront create-invalidation --distribution-id E2JTJP15FWKFBS --paths '/*'"
aws cloudfront create-invalidation --distribution-id E2JTJP15FWKFBS --paths '/*'
