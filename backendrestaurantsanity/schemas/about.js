export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'HeadText',
      type: 'string',
    },
    {
      name: 'description',
      title: 'HeadSubText',
      type: 'string',
    },
    {
      name: 'service',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
