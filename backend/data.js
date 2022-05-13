import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'mabuX',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
        {

            name:"EMF Reader",
            category:"Handheld",
            image: "/images/p1.jpg",
            price: 45,
            countInStock: 100,
            brand: "Phasmophobia",
            rating: 4.5,
            numReview: 10,
            description: "The Electro Magnetic Field Reader is used to detect fluctations in electromagnetic fields left behind by paranormal activity."
        },
        {

            name:"Flashlight",
            category:"Handheld",
            image: "/images/p2.jpg",
            price: 30,
            countInStock: 50,
            brand: "Phasmophobia",
            rating: 4.5,
            numReview: 43,
            description: "The Flashlight is a basic hunting tool designed to help you when the lights go out."
        },
	    {

            name:"Ghost Writing Book",
            category:"Placed",
            image: "/images/p3.jpg",
            price: 40,
            countInStock: 10,
            brand: "Phasmophobia",
            rating: 3.0,
            numReview: 51,
            description: "Also known as automatic writing, if you place this book near a Ghost it will allow certain Ghosts to write on it."
        },
	    {

            name:"Photo Camera",
            category:"Handheld",
            image: "/images/p4.jpg",
            price: 40,
            countInStock: 20,
            brand: "Phasmophobia",
            rating: 4.5,
            numReview: 111,
            description: "This is used for taking photos of paranormal activity."
        },
	    {

            name:"Spirit Box",
            category:"Handheld",
            image: "/images/p5.jpg",
            price: 50,
            countInStock: 15,
            brand: "Phasmophobia",
            rating: 3.5,
            numReview: 16,
            description: "Can capture radio frequencies that allow for communication with spirits."
        },
	    {

            name:"Thermometer",
            category:"Handheld",
            image: "/images/p6.jpg",
            price: 30,
            countInStock: 20,
            brand: "Phasmophobia",
            rating: 4.0,
            numReview: 45,
            description: "Reads the temperature of the room, which can help when locating ghosts."
        },
	    {

            name:"UV Flashlight",
            category:"Handheld",
            image: "/images/p7.jpg",
            price: 35,
            countInStock: 10,
            brand: "Phasmophobia",
            rating: 4.0,
            numReview: 13,
            description: "Able to spot even the most subtle paranormal prints and is one of the most vital pieces of equipment for tracking ghosts."
        },
	{

            name:"Video Camera",
            category:"Placed",
            image: "/images/p8.jpg",
            price: 50,
            countInStock: 100,
            brand: "Phasmophobia",
            rating: 4.5,
            numReview: 103,
            description: "This is used for maintaining surveillance on different areas as well as detecting Ghost Orbs."
        },
    ]
}
export default data