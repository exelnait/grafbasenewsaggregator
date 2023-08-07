import axios, { AxiosResponse } from 'axios';

export function downloadFileFromURL(fileUrl: string): Promise<Buffer> {
  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'arraybuffer',
  }).then((response: AxiosResponse) => Buffer.from(response.data, 'binary'));
}

const BUCKET = 'newsaggregator8688a98338a64a7da7d92178eafd61a6123111-dev';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

let client = new S3Client({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: 'AKIA6JERAEWOYY5SBBKE',
    secretAccessKey: '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',
  },
});

export async function saveFileByUrl({
  url,
  key,
}: {
  url: string;
  key: string;
}): Promise<{ bucket: string; key: string }> {
  if (!BUCKET) {
    throw new Error('BUCKET is not defined');
  }
  const buffer = await downloadFileFromURL(url);
  if (buffer) {
    await client.send(
      new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer })
    );
    return {
      bucket: BUCKET,
      key,
    };
  } else {
    throw new Error('File is empty');
  }
}
