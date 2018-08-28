#! /usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const mkdirp = require('mkdirp');
const [type, name, subDir = false] = process.argv.slice(2);

const getTemplate = (type, name, template = 'template.js') => {
    const templateSrc = `./src/${type}s/_${template}`;
    try {
        return fs.readFileSync(templateSrc, 'utf-8').replace(/REPLACE/g, name);
    } catch (_) {
        console.error(chalk.red('Error reading template!'));
        console.log(`Template for ${type} should be present in ` + chalk.blue.underline.bold(templateSrc));
        process.exit(1);
    }
};

const component = () => {
    const path = `./src/${type}s/${subDir ? subDir + '/' : ''}${name}/`;
    const template = getTemplate('component', name);
    const testTemplate = getTemplate('component', name, 'template.test.js');
    mkdirp.sync(path);

    fs.writeFileSync(`${path}index.js`, template);
    console.log(chalk.green(`Successfully created ${type} "${name}" in `) + chalk.blue.underline.bold(path));

    fs.writeFileSync(`${path}test.js`, testTemplate);
    console.log(chalk.green(`Successfully created ${type} "${name}" test in `) + chalk.blue.underline.bold(path));
};

const container = () => {
    const path = `./src/${type}s/${subDir ? subDir + '/' : ''}`;
    const template = getTemplate('container', name);
    mkdirp.sync(path);

    fs.writeFileSync(`${path}${name}.js`, template);
    console.log(chalk.green(`Successfully created ${type} "${name}" in `) + chalk.blue.underline.bold(path));
};

const create = {
    component,
    container,
};

const main = () => {
    if (!name || !create[type]) {
        console.error(chalk.red('Error in passed arguments! ' + JSON.stringify(process.argv.slice(2))));
        console.log('Usage: yarn new [component|container] name subDir/subSubDir');
        process.exit(1);
    }
    create[type]();

    process.exit(0);
};

main();
