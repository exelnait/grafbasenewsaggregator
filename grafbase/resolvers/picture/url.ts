import { Picture } from '../../../graphql/generated/graphql';

export default function Resolver(root: Partial<Picture>, args, context) {
  return getResizedPictureUrl(root.bucket, root.key);
}

function getResizedPictureUrl(
  bucket: string,
  key: string,
  width?: number,
  height?: number
): string {
  if (bucket == '' && key == '') {
    return null;
  }
  const params: Record<string, any> = {
    bucket,
    key,
  };
  if (width && height) {
    params.edits = {
      resize: {
        width,
        height,
        fit: 'cover',
      },
    };
  }
  const encodedParams = btoa(JSON.stringify(params));
  return `${process.env.CDN_URL}/${encodedParams}`;
}
