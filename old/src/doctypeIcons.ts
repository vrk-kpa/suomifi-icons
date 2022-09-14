import doc from './doctypeIcons/icon-doc.svg';
import genericFile from './doctypeIcons/icon-generic-file.svg';
import pdf from './doctypeIcons/icon-pdf.svg';
import ppt from './doctypeIcons/icon-ppt.svg';
import xls from './doctypeIcons/icon-xls.svg';
import xml from './doctypeIcons/icon-xml.svg';

export type DoctypeIconKeys = keyof typeof doctypeIcons;

export const doctypeIcons = {
  doc,
  genericFile,
  pdf,
  ppt,
  xls,
  xml
};
