'use strict';

const expect = require("chai").expect;
const app = require("express")();
const request = require("supertest");


describe("Job service", () => {
	it("should validate that title is greater than 4 characters");
	it("should validate that title is less than 40 characters");
	it("should validate that description is greater than 4 characters");
	it("should validate that desctiption is less than 200 characters");

	it("should pass a new job to the database save");  
	it("should return a status of 200 if save is successful");
	it("should return a job with an id");
	it("should return a error if save is fails");
});