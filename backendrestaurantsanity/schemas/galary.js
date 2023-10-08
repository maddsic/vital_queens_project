export default {
  name: 'galary',
  title: 'Galary',
  type: 'document',
  fields: [
    // NAme of the food
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // description of the food
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    // Price of the food
    {
      name: 'price',
      title: 'Price',
      type: 'number',
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
