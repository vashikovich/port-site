import Airtable from "airtable";

export async function getHomeContent() {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE);
  const records = await airtableBase.table("Home").select().all();
  return records.map((r) => r.fields);
}

export async function getTechDescriptions() {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE);
  const records = await airtableBase.table("Tech").select().all();
  return records.map((r) => r.fields);
}

export async function getProjects() {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE);
  const records = await airtableBase.table("Project").select().all();
  return records.map((r) => r.fields);
}
