#
# This script will kick off the CSV importer as a web server, using Docker run.
# It will launch a web server on port 8081 that you can approach and use to import data.
#

#
# Create a personal access token in your Firefly III installation, under 'Profile'
#
PERSONAL_ACCESS_TOKEN=eyJ0...

#
# This is the full path to your Firefly III installation.
# Remove any trailing slashes, please!
#
FIREFLY_III_URL=https://demo.firefly-iii.org

#
# There is no need to touch anything after this point, but if you're smart you're free to do so.
#

docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN=$PERSONAL_ACCESS_TOKEN \
-e FIREFLY_III_URL=$FIREFLY_III_URL \
-p 8081:8080 \
fireflyiii/csv-importer:latest
