#!/usr/bin/env node

import { createCli } from 'code-migrate';
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

createCli({
    binName: 'px-to-rem-css-migration-cli',
    migrationFile: './px-to-rem-css-migration.ts',
    version: require('./package.json').version,
});

//cli();
