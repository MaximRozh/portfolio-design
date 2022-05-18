export default{
    name:'contactInfo',
    title:'Your Information',
    type: 'document',
    fields:[
        {
            name:'image',
            title:'Hero image',
            type:'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'logo',
            title:'Logo',
            type:'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'phoneNumber',
            title:'Phone Number',
            type: 'string',
        },
        
    ]
}