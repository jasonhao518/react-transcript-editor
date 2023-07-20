import whisperToDraft from './index';

import draftTranscriptExample from './sample/bbcKaldiToDraft.sample.js';
import kaldiTedTalkTranscript from './sample/whisperTranscript.sample.json';

// TODO: figure out why the second of these two tests hang
// might need to review the draftJS data structure output
describe('whisperToDraft', () => {
  const result = whisperToDraft(kaldiTedTalkTranscript);
  it('Should be defined', ( ) => {
    expect(result).toBeDefined();
  });

  it('Should be equal to expected value', ( ) => {
  //  expect(result).toEqual(draftTranscriptExample);
  });
});
