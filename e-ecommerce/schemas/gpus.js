//exporting an object schema
export default {
    name : 'gpus',
    title: 'gpus',
    type : 'document',
    fields :[
        //providing fields for our schema which are object based
        {
            name: 'image',
            title: 'Image',
            type : 'array', //creating an array of images
            of:[{type: 'image'}],
            options: {
                hotspot: true,
            }
       },

       {
        name:'name',
        title:'Name',
        type: 'string',
       },
       {
        //slug is a like a url
        name: 'slug',
        title:'slug',
        type:'slug',
        options:{
            source:'name',
            maxLength: 90,
        }
       },
       {
        name:'price',
        title:'Price',
        type: 'number',
       },
       {
        name:'details',
        title:'Details',
        type:'string',
       }
    ]
}