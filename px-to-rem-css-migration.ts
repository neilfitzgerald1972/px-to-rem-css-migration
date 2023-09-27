import { migrate } from 'code-migrate';

// 16px = 1rem for most projects
const PX_TO_REM_RATIO = 16; 

function convertPxToRem(source: string, size: number) {
    // Matches 1px, 1.5px, 1.5.5px, 1.5.5.5px, etc.
  return source.replace(/(\d+[\.\d]*)px/g, (match, px) => {
    // parseFloat is used for cases like 1.5.5.5px - will be converted to 1.5
    return `${parseFloat(px) / size}rem`;
  });
}

migrate(
  'automatic migration for css files',
  ({ transform }) => {
    transform(
      'convert px to rem',
      // patterns must be either string or an array of strings
      ['**/*.css','**/*.scss','**/*.sass','**/*.less'], 
      ({ source }) => {
        return convertPxToRem(source, PX_TO_REM_RATIO);
      }
    );
  }
);
