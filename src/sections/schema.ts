import { SectionTypeEnum } from '@/types/section.ts';

import featureSliceShowSchema from './FeaturedSlideShow/schema.ts';
import spliceSchema from './MultiMediaSplicing/schema.ts';
import videoSchema from './Video/schema.ts';

export const allSectionSchema = {
  [SectionTypeEnum.SlideShow]: featureSliceShowSchema,
  [SectionTypeEnum.Video]: videoSchema,
  [SectionTypeEnum.MultiMediaSplicing]: spliceSchema,
};
