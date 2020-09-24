#!/usr/bin/env node
import fs from "fs";
import { exit } from "process";

if (process.argv.length !== 5) {
  console.log("Subtracts the Polygons from a GeoJSON file from the first Polygon from another GeoJSON file");
  console.log("usage: node geoSubtract.mjs <minuend.geojson> <subtrahend.geojson> <output.geojson>");
  exit(-1);
}

const minFile = process.argv[2];
const subFile = process.argv[3]
const outFile = process.argv[4];

const minData = JSON.parse(fs.readFileSync(minFile, "utf8"))
const subData = JSON.parse(fs.readFileSync(subFile, "utf8"))

const poly = minData.features.find((feature) => feature.geometry?.type === "Polygon");
if (poly) {
  subData.features.forEach(feature => {
    const { geometry } = feature;
    if (!geometry || geometry.type !== "Polygon") return;
    geometry.coordinates.unshift(poly.geometry.coordinates[0]);
  })
}

fs.writeFileSync(outFile, JSON.stringify(subData), "utf8");
