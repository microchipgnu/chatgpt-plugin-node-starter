import fs from 'fs';
import path from 'path';

const aiPluginJsonPath = '../../public/.well-known/ai-plugin.json';
const propmtsPath = '../prompts/description_for_model.md';

export const setup = () => {
  const jsonFilePath = path.join(__dirname, aiPluginJsonPath);
  const promptFilePath = path.join(__dirname, propmtsPath);

  const prompt = fs.readFileSync(promptFilePath, 'utf-8');

  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  jsonData.description_for_model = prompt;

  // write the updated JSON data back to the file
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
};
