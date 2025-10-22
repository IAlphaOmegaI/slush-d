import { createTsdownConfig, type TsdownOptions } from "@zenncore/tsdown";
import {
  getComponentsOptions,
  getUtilsOptions,
} from "@zenncore/tsdown/options";

//TODO: for other utils folders other than helpers|hooks|types
// const utilsFolders = fs
//   .readdirSync("./src/utils", { withFileTypes: true })
//   .filter((dirent) => dirent.isDirectory())
//   .map((dirent) => dirent.name)
//   .filter((folderName) => {
//     const indexPath = `./src/utils/${folderName}/index.ts`;
//     return fs.existsSync(indexPath);
//   });

// const utilsEntries = utilsFolders.reduce<Record<string, string>>(
//   (accumulator, folderName) => {
//     accumulator[`${folderName}/index`] = `./src/utils/${folderName}/index.ts`;
//     return accumulator;
//   },
//   {},
// );

const options = [
  getComponentsOptions(),
  ...getUtilsOptions("./src/utils"),
] satisfies TsdownOptions[];

export default createTsdownConfig(
  options.filter(({ entry }) => entry && Object.keys(entry).length > 0),
);
