export default {
  name: 'galary',
  title: 'Galary',
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
