// const fs = require("fs");

// const content = "import React from 'react'";

// interface SuomifiIconBaseInterface<T> {
//     /** Icon name */
//     icon: T;
//     /** Custom classname to extend or customize */
//     className?: string;
//     // Allow passing unsupported custom props to SVG without providing an API
//     [key: string]: any;
//   }

// const iconTemplate = (iconName) => {

//     return (): SuomifiIconBaseInterface => {
//     <iconName>

//     </iconName>

//     const content = `
//     import React from 'react';

//     `
// }

// const createIcon = async () => {
//   try {
//     await fs.mkdirSync("TestIcon");
//     fs.writeFileSync("./TestIcon/TestIcon.tsx", content);
//   } catch (err) {
//     console.error(err);
//   }
// };

// createIcon();
