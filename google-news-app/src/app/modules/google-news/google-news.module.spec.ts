import { GoogleNewsModule } from './google-news.module';

describe('GoogleNewsModule', () => {
  let googleNewsModule: GoogleNewsModule;

  beforeEach(() => {
    googleNewsModule = new GoogleNewsModule();
  });

  it('should create an instance', () => {
    expect(googleNewsModule).toBeTruthy();
  });
});
