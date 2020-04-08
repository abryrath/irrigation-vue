const defaultConfig = {
  branch: 'master',
  user: 'abry',
  host: 'abryrath.com',
  commands: [
    '{{gitCommand}} fetch origin',
    '{{gitCommand}} reset --hard {{gitHead}}',
    '{{yarnCommand}} install',
    '{{yarnCommand}} build'
    // '{{gitCommand}} checkout {{branch}}',
    // '{{gitCommand}} pull origin {{branch}}',
    // '{{composerCommand}} install -d {{rootDir}}/cms',
    // 'cd {{rootDir}}/cms && {{craftCommand}} migrate/all',
    // 'cd {{rootDir}}/cms && {{craftCommand}} project-config/sync',
    // '{{yarnCommand}} install',
    // '{{yarnCommand}} build:app',
  ],
  sshCommand: 'ssh {{user}}@{{host}} bash -c ',
  gitCommand:
    'cd {{rootDir}} && /usr/bin/git',
  yarnCommand: '/home/abry/.yarn/bin/yarn --cwd={{rootDir}}',
  // composerCommand: '/opt/cpanel/composer/bin/composer',
  // craftCommand: '/usr/local/bin/php craft',
  commandPrefix: 'set -e; ',
};

// Define different deployments

const master = Object.assign({}, defaultConfig, {
  branch: 'master',
  rootDir: '/home/abry/Sites/irrigation-vue/',
});

// const staging = Object.assign({}, defaultConfig, {
//   branch: 'staging',
//   user: 'acbj',
//   host: 'acbj.union.agency',
//   rootDir: '/home/acbj/sites/staging/acbj',
// });

// Export the array of deployments
const deployments = [master];

module.exports = deployments;
