const fse = require('fs-extra');
const path = require('path');

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];
const utilFiles = [
  'aria.d.ts',
  'classes.d.ts',
  'iconInterface.d.ts',
  'styles.d.ts'
];

// copy util types to all subpackages
const copyUtilTypes = (dest) => {
  const utilTypePath = path.join(__dirname, `dist/types/utils`);

  utilFiles.forEach((utilFile) => {
    try {
      fse.copyFile(`${utilTypePath}/${utilFile}`, `${dest}/${utilFile}`);
    } catch (error) {
      console.log(error);
    }
  });
};

// copy type definitions under corresponding subpackage
const moveTypes = (destinationPath, iconType) => {
  const currentPath = path.join(__dirname, `dist/types/${iconType}Icons`);
  fse.copy(currentPath, destinationPath, (err) => {
    if (err) {
      console.log(`Could not move ${iconType}Icons types`);
      return console.error(err);
    }
  });
};

// create types directory under subpackages and copy files
iconTypes.forEach((iconType) => {
  const destinationPath = path.join(__dirname, `dist/${iconType}Icons/types`);
  fse.mkdirSync(`${destinationPath}`, { recursive: true });
  moveTypes(destinationPath, iconType);
  copyUtilTypes(destinationPath);
  console.log(`Moved ${iconType}Icons types to ${destinationPath}`);
});
