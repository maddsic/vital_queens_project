export default {
  name: 'menuHighlight',
  title: 'MenuHighlight',
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
      name: 'menus',
      title: 'Menus',
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
