/**
 * A script to frank the build i.e. to copy the package.json an readme files to the dist folder.
 * This will enable importing icons from subfolders with cleaner paths. For example 'import {Alert} from suomifi-icons/base/'
 * instead of 'import {Alert} from suomifi-icons/dist/base'.
 *
 * This allows shorter names for the icons, as there are duplicate names across different icon sets.
 *
 * Credit for the script goes to @Izhaki
 */

/* eslint-disable no-console */
const { resolve, join, basename } = require('path');
const { readFile, writeFile, copy } = require('fs-extra');

const packagePath = process.cwd();
const distPath = join(packagePath, './dist');

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), 'utf8');

async function createMainPackageFile() {
  const packageData = await readFile(
    resolve(packagePath, './package.json'),
    'utf8'
  );
  const { scripts, devDependencies, ...packageOthers } =
    JSON.parse(packageData);
  const newPackageData = {
    ...packageOthers,
    private: false
  };

  const targetPath = resolve(distPath, './package.json');

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

async function createIconTypePackageFile(iconType) {
  const packageData = await readFile(
    resolve(packagePath, './package.json'),
    'utf8'
  );
  const { scripts, devDependencies, name, ...packageOthers } =
    JSON.parse(packageData);
  const newPackageData = {
    name: `suomifi-icons/${iconType}Icons`,
    main: `./cjs/${iconType}Icons/index.js`,
    module: `./esm/${iconType}Icons/index.js`,
    types: `./types`,
    ...packageOthers,
    private: false
  };

  const targetPath = resolve(distPath, `./${iconType}Icons/package.json`);

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

function createIconTypePackageFiles() {
  iconTypes.forEach((iconType) => createIconTypePackageFile(iconType));
}

async function includeFileInBuild(file) {
  const sourcePath = resolve(packagePath, file);
  const targetPath = resolve(distPath, basename(file));
  await copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function run() {
  try {
    await createMainPackageFile();
    await includeFileInBuild('./README.md');
    await includeFileInBuild('./LICENSE');
    await includeFileInBuild('./DEVELOPMENT.md');
    createIconTypePackageFiles();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
