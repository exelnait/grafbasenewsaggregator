const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: 'org-Zu6A1LhflzQmLn8Aky4UjxwZ',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function summarizeVideoCaptions(
  transcript: string
): Promise<string> {
  const pre_prompt =
    'Summarize the following video transcript, focusing on the main points and arguments. The summary should be short and complete. Maximum three sentences. Return result in the following format: • [sentence]\n' +
    '\n\n\n';

  const prompt = pre_prompt + transcript;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 400,
    n: 1,
    messages: [{ role: 'user', content: prompt }],
  });
  return completion?.data?.choices[0].message.content;
}
export async function summarizeArticle(article: string): Promise<string> {
  const pre_prompt =
    'Summarize the following article/text, focusing on the main points and arguments. The summary should be short and complete. Maximum three sentences. Return result in the following format: • [sentence]\n' +
    '\n\n\n';

  const prompt = pre_prompt + article;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 400,
    n: 1,
    messages: [{ role: 'user', content: prompt }],
  });
  return completion?.data?.choices[0].message.content;
}
