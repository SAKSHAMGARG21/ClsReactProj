function Array(){
    let data=[
        {id:1,name:'Alok',city:'Nodia',email:'user@123gmail.com'},
        {id:2,name:'bob',city:'Delhi',email:'user2@123gmail.com'},
    ]

    return (
        <div>
            <h2>
                Data comming form Array
            </h2>

            {
                data.map((element)=>
                    <h3 key={element.id}>Name:{element.name},City:{element.city},Email:{element.email}</h3>
                )
            }
        </div>
    )
}

export default Array