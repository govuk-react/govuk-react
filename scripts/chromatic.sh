if [[ $TRAVIS_EVENT_TYPE != 'pull_request' || $TRAVIS_PULL_REQUEST_SLUG != $TRAVIS_REPO_SLUG ]];
then
   if [ "${TRAVIS_BRANCH}" != "master" ];
   then
     yarn chromatic-test;
   else
     # http://docs.chromaticqa.com/setup_ci
     # We know any changes that make it to master *must* have been approved
     yarn chromatic-test --auto-accept-changes;
   fi;
fi;
