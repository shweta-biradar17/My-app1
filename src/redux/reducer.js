export default function reducer(state = { users: [] }, action) {
    console.log(`Reducer call`);
    let newState = { ...state };
    switch (action.type) {
        case 'FETCH_USERS':
            newState.users = action.payload;
            return newState;

            case 'ADD_USERS':
     
        
            newState.users.push({
                id: action.payload.id,
                name:[action.payload.firstname,action.payload.lastname],
                dob: action.payload.dob,
                contact:[action.payload.contact1, action.payload.contact2],
                city: action.payload.city,
                state: action.payload.state
            });
        
          console.log(newState);         
            return newState;

        case 'UPDATE_USERS':
            console.log(action.payload);
            newState.users.forEach(user => {

                console.log(user.id);

                if (user.id === parseInt(action.payload.id)) {  
                    if(action.payload.firstname){
                        user.name[0] = action.payload.firstname;
                    } 
                    if(action.payload.lastname){
                        user.name[1] = action.payload.lastname;
                    }                

                    user.dob = action.payload.dob;   
                    if(action.payload.contact1){
                        user.contact[0] = action.payload.contact1;
                    }   
                    if(action.payload.contact2){
                        user.contact[1] = action.payload.contact2;
                    }                
                    user.city = action.payload.city;
                    user.state = action.payload.state;
                }
            }         
            )
            console.log(newState);         
            return newState;

        case 'DELETE_USERS':
                const index=newState.users.indexOf(parseInt(action.payload.id))
                if(newState.users.filter((id)=>id===action.payload.id)){
                    newState.users.splice(index-1,1)
                } 
                return newState;
        default: return state;        
    }
}