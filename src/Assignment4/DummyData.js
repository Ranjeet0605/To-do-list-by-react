const fileexplore = 
{
    name:"root",
    id:1,
    isFolder:true,
    items:[
        {
            name:"public",
            id:2,
            isFolder:true,
            items:[
                {
                    id:3,
                    name:"public nested1",
                    isFolder:true,
                    items:[
                        
                        {
                        id:4,
                        name:"hello.html",
                        isFile:true,
                    },
                         { id:5,
                            name:"index.js",
                            isFile:true,
                        
                        }
                    
                    
                ]
            }
                
            ]
        },
        {
            name:"src",
            id:5,
            isFolder:true,
            items:[
                {
                    id:6,
                    name:"public nested1",
                    isFolder:true,
                  
                },  
                        {
                        id:7,
                        name:"hello.html",
                        isFile:true,
                    },
                         { id:8,
                            name:"index.js",
                            isFile:true,
                        
                        },
                    
                    
              
       

    ]

    
},
{
    id:8,
    name:"package.json",
    isFile:true,
}

    ]
        }
       


export default fileexplore;