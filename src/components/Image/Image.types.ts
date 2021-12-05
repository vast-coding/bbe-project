import { ImageViewStages } from '../../constants/constants';

export type IImageProps = {
  srcUrl?: string;
  minHeight?: string;
  stage: ImageViewStages;
  showCardUI?: boolean;

  animationStepDuration?: string;
  handleSettingsTab?: () => void;
  handleExpandCard?: () => void;
  stageBack?: () => void;
};
