import type { FeatureSetting } from './features';

export interface YNABToolkitObject {
  assets: {
    logo: string;
  };
  environment: 'development' | 'beta' | 'production';
  extensionId: string;
  invokeFeature(featureName: FeatureName, options?: { force: boolean }): void;
  destroyFeature(featureName: FeatureName): void;
  options: {
    [settingName in FeatureName]: FeatureSetting;
  };
  name: string;
  version: string;
}
