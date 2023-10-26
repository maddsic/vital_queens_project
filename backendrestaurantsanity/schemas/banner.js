export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
