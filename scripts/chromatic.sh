if [ $TRAVIS_EVENT_TYPE = 'push' ];
then
   if [ "${TRAVIS_BRANCH}" != "master" ];
   then
     yarn chromatic;
   else
     # http://docs.chromaticqa.com/setup_ci
     # We know any changes that make it to master *must* have been approved
     yarn chromatic --auto-accept-changes;
   fi;
fi;
