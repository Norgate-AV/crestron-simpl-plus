'use strict';

import 'mocha';
import * as assert from 'assert';
// import { commands, Uri } from 'vscode';
import { join, basename, normalize, dirname } from 'path';
import * as fs from 'fs';
import * as svg from "../visualizer";


function assertUnchangedTokens(testFixurePath: string, done: any) {
    let fileName = basename(testFixurePath);
    try {
        let fixtureData = fs.readFileSync(testFixurePath).toString();
        let parser = new svg.VisualizerParse();
        parser.fileText = fixtureData;
        parser.parseFileText();
        let viewer = new svg.SVGCreator(parser);
        let fixtureSVG = viewer.returnSVG();

        let resultsFolderPath = join(dirname(dirname(testFixurePath)), 'visualizer-results');
        if (!fs.existsSync(resultsFolderPath)) {
            fs.mkdirSync(resultsFolderPath);
        }
        let resultPath = join(resultsFolderPath, fileName.replace('.', '_') + '.html');
        if (fs.existsSync(resultPath)) {
            let previousData = fs.readFileSync(resultPath).toString();
            try {
                assert.deepStrictEqual(fixtureSVG, previousData);
            } catch (e) {
                throw e;
            }
        }
        else {
            fs.writeFileSync(resultPath, fixtureSVG);
        }
        done();
    }
    catch (e) {
        done(e);
    }
}

   
	
suite('Visualizer', () => {
	let extensionsFolder = normalize(join(__dirname, '../../'));
	let extensions = fs.readdirSync(extensionsFolder);
	extensions.forEach(extension => {
		let extensionVisualizerFixturePath = join(extensionsFolder, extension, 'test', 'visualizer-fixtures');
		if (fs.existsSync(extensionVisualizerFixturePath)) {
			let fixturesFiles = fs.readdirSync(extensionVisualizerFixturePath);
			fixturesFiles.forEach(fixturesFile => {
				// define a test for each fixture
				test(extension + '-' + fixturesFile, function (done) {
					assertUnchangedTokens(join(extensionVisualizerFixturePath, fixturesFile), done);
				});
			});
		}
	});
});