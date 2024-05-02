export const parseTechs = (techs, names) => {
  const techList = names
    .split(/,\s+/)
    .map((n) => techs.find((t) => t["Name"] == n) || { Name: n });
  return techList;
};

export const parseHomeTechs = (content, techs, type) => {
  const techContent = content.find((c) => c["Type"] == type);
  const techNames = techContent["Title"];
  const techData = parseTechs(techs, techNames);
  return techData;
};
