import {defineType, defineField} from 'sanity';
export const Startup = defineType({
    name:'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name:'title',
            type:'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options:{
                source: 'title',
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: {type: 'author'}

        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation:(Rule) => Rule.min(1).max(29).required().error('Please Enter a category'),
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation:(Rule) => Rule.required(),
        }),

        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
        }),
        
    ],
})