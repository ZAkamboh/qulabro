import { OnboardingHeaderModule } from './onboarding-header.module';

describe('OnboardingHeaderModule', () => {
  let onboardingHeaderModule: OnboardingHeaderModule;

  beforeEach(() => {
    onboardingHeaderModule = new OnboardingHeaderModule();
  });

  it('should create an instance', () => {
    expect(onboardingHeaderModule).toBeTruthy();
  });
});
