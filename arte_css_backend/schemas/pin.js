export default{
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'about',
            title: 'Sobre',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destino',
            type: 'url',
        },
        {
            name: 'category',
            title: 'Categoria',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option:{
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'ID Usuario',
            type: 'string',
           
        },
        {
            name: 'postedBy',
            title: 'Publicado por',
            type: 'postedBy',
        },
        {
            name: 'save',
            title: 'Guardar',
            type: 'array',
           of:[{type: 'save'}]
        },
        {
            name: 'comments',
            title: 'Comentarios',
            type: 'array',
           of:[{type: 'comment'}]
        },

    ]
}