#!/usr/bin/env node
import fs from "fs";
import { exit } from "process";

if (process.argv.length !== 5) {
  console.log("Split a single GeoJSON file into many, grouping based on a property");
  console.log("usage: node group.mjs <input.geojson> <out_filename_prefix> <grouping_property>");
  exit(-1);
}

const mapDataFile = process.argv[2];
const outPrefix = process.argv[3]
const groupField = process.argv[4];

const mapData = JSON.parse(fs.readFileSync(mapDataFile, "utf8"))

const groups = new Set();
mapData.features.forEach(feature => {
  const group = feature.properties[groupField]
  groups.add(group);
});

groups.forEach(group => {
  const data = {
    ...mapData,
    features: mapData.features
      .filter(feature => feature.properties[groupField] === group)
      .map(feature => {
        const newProperties = { ...feature.properties };
        delete newProperties[groupField];
        return { ...feature, properties: newProperties };
      }),
  };
  fs.writeFileSync(`${outPrefix}${group}.geojson`, JSON.stringify(data), "utf8");
});
