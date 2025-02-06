module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"tiltle of task",
                        example:"Create BBDD"
                    },
                    body:{
                        type:'string',
                        description:"Description of task",
                        example:"Create DB in mongo with mongoose"
                    },
                }        
            }
        }
    }
}
