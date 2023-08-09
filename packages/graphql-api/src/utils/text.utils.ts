const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: 'org-Zu6A1LhflzQmLn8Aky4UjxwZ',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function summarizeVideoCaptions(content: string): Promise<string> {
  const prompt = `Please summary this youtube video transcript. Size should be 1/10 of original content and split to paragraphs: ${content}`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion?.data?.choices[0].message.content;
}
export async function summarizeArticle(content: string): Promise<string> {
  const prompt = `Please summary this Article. in 3 sentences. each max size: 50 symbols: ${content}`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion?.data?.choices[0].message.content;
}
