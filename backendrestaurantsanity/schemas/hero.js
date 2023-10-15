export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'headerTitle',
      title: 'HeaderTitle',
      type: 'string',
    },
    {
      name: 'headerSubTitle',
      title: 'HeaderSubTitle',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      // of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
