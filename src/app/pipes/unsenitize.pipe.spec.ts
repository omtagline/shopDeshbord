import { UnsenitizePipe } from './unsenitize.pipe';

describe('UnsenitizePipe', () => {
  it('create an instance', () => {
    const pipe = new UnsenitizePipe();
    expect(pipe).toBeTruthy();
  });
});
