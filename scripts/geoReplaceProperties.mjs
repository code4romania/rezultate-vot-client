#!/usr/bin/env node
import fs from "fs";
import { exit } from "process";

if (process.argv.length !== 8) {
  console.log("Replace feature properties in a GeoJSON with select properties from another GeoJSON, renaming them. Matching between the files is done based on a specified ID property.");
  console.log("usage: node geoReplaceProperties.mjs <input.geojson> <properties.geojson> <output.geojson> <id_property> <property_list_in> <property_list_out>");
  exit(-1);
}

const mapDataFile = process.argv[2];
const mapMetaFile = process.argv[3];
const outFile = process.argv[4]
const idField = process.argv[5];
const fieldListStr = process.argv[6];
const fieldListMappingStr = process.argv[7];

const mapData = JSON.parse(fs.readFileSync(mapDataFile, "utf8"))
const mapMeta = JSON.parse(fs.readFileSync(mapMetaFile, "utf8"))

const fieldList = fieldListStr.split(",");
const fieldListMapping = fieldListMappingStr.split(",");

const registry = new Map()
mapMeta.features.forEach(feature => {
  const { properties } = feature;
  const id = properties[idField];
  if (id == null) { return; }

  const newProps = {};
  fieldList.forEach((fieldName, index) => {
    newProps[fieldListMapping[index]] = properties[fieldName];
  });

  registry.set(id, newProps);
})

mapData.features.forEach(feature => {
  const id = feature.properties[idField];
  feature.properties = registry.get(id);
})

fs.writeFileSync(outFile, JSON.stringify(mapData), "utf8");
