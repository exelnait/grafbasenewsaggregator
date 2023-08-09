import { YoutubeTranscript } from 'youtube-transcript';

export function getVideoTranscript(id: string) {
  return YoutubeTranscript.fetchTranscript(id);
}
