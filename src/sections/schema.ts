import featureSliceShowSchema from './FeaturedSlideShow/schema.json';
import spliceSchema from './MultiMediaSplicing/schema.json';
import videoSchema from './Video/schema.json';

export const allSectionSchema = {
  'featured-slideshow': featureSliceShowSchema, // key要和featureSliceShowSchema.type对应
  video: videoSchema, // key要和videoSchema.type对应
  'multi-media-splicing': spliceSchema, // key要和spliceSchema.type对应
};
