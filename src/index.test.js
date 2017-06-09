import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";


describe("Our first test", () => {
	it("should pass", () => {
		expect(true).to.equal(true);
	});
});

describe("index.html", () => {
	it("should say hello", (done) => {
		const index = fs.readFileSync("./src/index.html", "utf-8");
		// optionally provide array of JS files to load in as 2nd param
		// no fetch here. fetch only works in browser
		// having callback here, is an async request. need to pass in done param above
		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName("h1")[0];
			expect(h1.innerHtml).to.equal("Hello World!");
			done();
			window.close();
		});
	});
});
