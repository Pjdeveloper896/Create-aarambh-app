#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appName = process.argv[2];

if (!appName) {
  console.log(chalk.red("Please provide a project name"));
  process.exit(1);
}

const targetPath = path.join(process.cwd(), appName);

async function init() {
  console.log(chalk.cyan(`Creating AarambhJS app: ${appName}\n`));

  await fs.mkdirp(targetPath);

  const templateDir = path.join(__dirname, "template");
  await fs.copy(templateDir, targetPath);

  console.log(chalk.green("✔ Project created successfully!"));
  console.log(chalk.yellow(`\n👉 cd ${appName} && npm install && npm start`));
}

init();
