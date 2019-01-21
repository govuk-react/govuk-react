# Travis offers two type of builds for commits on pull requests: so called pr and push builds. It only makes sense to run Chromatic once per PR, so we suggest disabling Chromatic on pr builds for internal PRs (i.e. PRs that aren’t from forks)
# http://docs.chromaticqa.com/setup_ci
if [[ $TRAVIS_EVENT_TYPE != 'pull_request' || $TRAVIS_PULL_REQUEST_SLUG != $TRAVIS_REPO_SLUG ]];
# For external PRs (PRs from forks of your repo), the above code will ensure Chromatic does run on the pr build, because Travis does not trigger push builds in such cases.
then
   if [[ $TRAVIS_BRANCH != 'master' || $TRAVIS_EVENT_TYPE == 'pull_request' ]];
   then
     yarn chromatic-test;
   else
     # http://docs.chromaticqa.com/setup_ci
     # We know any changes that make it to master *must* have been approved
     yarn chromatic-test --auto-accept-changes;
   fi;
fi;
