import { readFile } from 'fs/promises';

import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

async function getLatestVersion() {
  const [content] = JSON.parse(await readFile('.changelog/manifest.json', 'utf8'));
  return content.version;
}

export async function main() {
  const url = process.env.SLACK_WEBHOOK_URL;

  if (!url) {
    throw new Error('Missing Slack Webhook URL');
  }

  const version = await getLatestVersion();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      project: 'paalan-react-shadcn-ui',
      version,
      url: `https://github.com/paalamugan/paalan-react-shadcn-ui/blob/main/.changelog/v${version}.mdx`,
      discord: 'https://discordapp.com/channels/1234567890',
      twitter: 'https://twitter.com/paalamugan',
    }),
  });

  if (response.ok) {
    console.log('✅ Successfully sent message to Slack');
  } else {
    console.error('❌ Failed to send message to Slack');
  }
}

main();
