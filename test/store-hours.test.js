import { test } from "node:test";
import assert from "node:assert/strict";
import { hoursFor } from "../src/StoreHours.js";

test("hours for a known store", () => assert.equal(hoursFor("Portland"), "8:00-18:00"));
test("unknown stores are closed", () => assert.equal(hoursFor("Boise"), "closed"));
