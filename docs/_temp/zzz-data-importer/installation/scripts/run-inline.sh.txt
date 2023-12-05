#
# This script will kick off the CSV importer on the command line, using Docker run.
# After it has run, the container will be stopped and removed automatically.
# To configure this script, change the variables below to your liking.

#
# Create a personal access token in your Firefly III installation, under 'Profile'
#
PERSONAL_ACCESS_TOKEN=eyJ0....

#
# This is the full path to your Firefly III installation.
# Remove any trailing slashes, please!
#
FIREFLY_III_URL=https://demo.firefly-iii.org

#
# There is no need to touch anything after this point, but if you're smart you're free to do so.
#
DIR=$PWD


echo "Link $DIR to /import"
docker run \
--rm \
-v $DIR:/import \
-e FIREFLY_III_ACCESS_TOKEN=$PERSONAL_ACCESS_TOKEN \
-e FIREFLY_III_URL=$FIREFLY_III_URL \
-e WEB_SERVER=false \
fireflyiii/csv-importer:latest
