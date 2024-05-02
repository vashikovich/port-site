import Airtable from "airtable";

const base = process.env.AIRTABLE_BASE || "";

export type HomeSchema = {
  title: string;
  content: string;
  type: string;
};

export type ProjectSchema = {
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  allTags: string[];
  techs: string[];
  allTechs: string[];
  id: string;
};

export type TechSchema = {
  name: string;
  logoFileName: string;
};

export async function getHomeContent(): Promise<HomeSchema[]> {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(base);
  const records = await airtableBase.table("Home").select().all();
  return records.map(
    (r): HomeSchema => ({
      title: r.fields["Title"] as string,
      content: (r.fields["Content"] as string) ?? null,
      type: r.fields["Type"] as string,
    })
  );
}

export async function getProjects(): Promise<ProjectSchema[]> {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(base);
  const records = await airtableBase.table("Project").select().all();
  const results: ProjectSchema[] = [];

  for (let r of records) {
    let tagsString = r.fields["Tags"] as string;
    let tagsStringParts = tagsString.split(/\s*\|\s*/);
    let tags = tagsStringParts[0].split(/\s*,\s*/);
    let allTags = tags.concat(tagsStringParts[1].split(/\s*,\s*/));

    let techsString = r.fields["Techs"] as string;
    let techsStringParts = techsString.split(/\s*\|\s*/);
    let techs = techsStringParts[0].split(/\s*,\s*/);
    let allTechs = techs.concat(techsStringParts[1].split(/\s*,\s*/));

    let result: ProjectSchema = {
      title: r.fields["Title"] as string,
      shortDesc: r.fields["Short Desc"] as string,
      longDesc: r.fields["Long Desc"] as string,
      tags,
      allTags,
      techs,
      allTechs,
      id: r.fields["ID"] as string,
    };

    results.push(result);
  }

  return results;
}

export async function getTechs(): Promise<TechSchema[]> {
  const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(base);
  const records = await airtableBase.table("Tech").select().all();
  return records.map((r) => ({
    name: r.fields["Name"] as string,
    logoFileName: (r.fields["Logo"] as string) ?? null,
  }));
}
