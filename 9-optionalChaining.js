const people = [
    {
        name: 'bob',
        location: 
            { 
                street: '123 main street', 
                timezone: 
                    { 
                        offset: '+7:00'
                    } 
            },
    },
    { 
        name: 'peter', 
        location: 
            { 
                street: '123 Pine street' 
            } 
    },
    {
        name: 'susan',
        location: 
            { 
                street: '123 Apple street', 
                timezone: 
                    { 
                        offset: '+9:00' 
                    }
            },
    },
  ]

people.forEach((person)=>{
    //console.log(person.location.timezone.offset) //throws undefined error if property is not there

    console.log(person.location && person.location.timezone && person.location.timezone.offset) //+7:00 undefined +9:00

    console.log(person?.location?.timezone?.offset || 'no offset')
})