import React from 'react'
import { Link } from 'react-router-dom'

const DetailCart = () => {
    return (

        <section className='flex justify-between container mx-auto my-5 gap-10' >
            <div className='w-3/4 space-y-2'>
                <img className='rounded-xl h-96 object-cover w-full  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                <h1 className='p-1'>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cumque sint? Est laudantium blanditiis, libero eaque repudiandae impedit iure deleniti, aut tempora explicabo omnis accusamus temporibus maxime inventore quo earum!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sint deleniti, beatae at doloremque unde dolor. Quia deleniti qui rerum autem, doloribus expedita delectus. Distinctio repellendus debitis minima qui at architecto assumenda rem eaque aspernatur tempore, quae omnis quibusdam laboriosam, suscipit incidunt ipsa dolore totam ab! Debitis fugiat porro accusamus, maiores nostrum facilis dicta aliquam sunt esse mollitia, quam corporis repudiandae vitae? Totam velit quidem vero, quaerat non omnis magnam, nesciunt pariatur iste similique soluta ipsam, a facilis impedit nobis. Aliquam delectus iure illum quo hic quis, optio voluptate fugit, impedit saepe vitae consequatur qui necessitatibus placeat accusamus deleniti temporibus nobis possimus similique! Nisi, vitae quasi a obcaecati quod earum. Quos deleniti est animi explicabo consectetur facilis minima quod cumque possimus veritatis enim doloribus repellendus earum, magni libero in. Illum, possimus corporis atque labore, blanditiis quibusdam libero inventore vel exercitationem at saepe, cupiditate iste odio adipisci aspernatur eveniet voluptates iure nulla reiciendis ipsa veniam quia. Ut, provident quibusdam debitis alias facere magnam veniam voluptatum, blanditiis illo officia, quia quod reprehenderit iusto fuga rem a? Expedita doloremque, nulla dicta aspernatur reiciendis dolor culpa iste ipsa quis! Suscipit culpa debitis sint repudiandae deleniti voluptates similique odio soluta possimus cumque eius ad aut quo, at itaque minus vitae provident ratione accusamus sequi maiores omnis ullam atque amet. Consectetur perspiciatis illum, laboriosam doloremque ex accusamus nemo eius pariatur dolores consequatur repellat! Repellat aut aliquam est, fuga enim animi dolorem nobis assumenda velit rem doloremque natus ea optio odit, sed soluta tempore pariatur commodi quibusdam exercitationem ipsa, maxime error doloribus? Nihil recusandae nobis, molestiae aspernatur explicabo asperiores, autem illo voluptatibus sequi, illum fugiat. Nulla placeat ullam modi expedita ad dolor animi maiores fugiat non! Fuga ducimus ex iusto maiores voluptatem veniam saepe maxime, iste blanditiis quibusdam, consequatur rem odit corrupti, at laborum rerum libero nostrum?
                </p>
                <div className='px-1 pb-1 flex justify-between items-center'>
                    <div className='w-10 flex items-center gap-1 '>
                        <img className='border-2 rounded-full' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhASExEQEBITDw8QEBMREBAQFRIRFhEWFxUSFxUYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADYQAAIBAQUFBwMDBAMBAAAAAAABAgMEBREhURIxQWFxMoGRobHB0SJC4VJy8GKCkqITI/EV/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAANKtWMVjJpLmQK16xXZTfN5ICyMN4ciiq2+pL7sP25ee8jSk3vbfV4gdDK1U198fFM0dvpfq8pfBQAqL7/wChS/V5S+DeNspv7497w9TngFdNGae5p9HibHLo96dsqR3Sffn6kHQgqqN7fqj3x+GWFC0wn2ZJ8tz8APUAAAAAAAAAAAAAAAAAAACPa7XGms83wWvwgPac1FYtpLVlZar04Q/yfsiFabTKo8W+i4I8Sjac3J4ttvmagBAAAAAAAAAAAAmABOs15SjlL6l5/ktqFeM1jF4+q6o5s2pVHF4p4MDpgQrFb1PJ5S8n0+CaRQAAAAAAAAAAACNbbUqcdZPsr36Aa262KmsFnJ7lpzZSTm5NtvFvezE5tttvFvNmCoAAAAAAAAAAAAAAAAAAAAABbXfb8cIyef2vXk+ZUgDqAV9223a+mXaW56r5LAigAAAAAAANKtRRTk9yRz1orOcnJ9y0WhMva0YvYW5b+b/BXlAABAAAAAAAAAAAAAAAAAAAAAAAAGYyaaayazRf2K0qpHHispLmc+SLDaP+OSfB5S6agdAACKAAAeVqrbEXLRZdeB6lTfNXOMNPqfXh7+IFc3jm9/EwAVAAAAAAAAAyljuz6HpZ6EqjwXe+CReWWyRprLN8W97Aq6N2Tlvwiueb8CVG6Y8ZSfTBFiCKr3dMOEpeT9iPVuqS7LUuTyZcADmalOUXg00+ZqdLVpRmsJLFFJbbE6bx3xe56cmVEUAAAAAAAAAAXd1V9qGD3xy7uH85E0obtrbM1o/pffu8y+IoAABzlqqbU5PV5dNyL61T2YSekXh14HOAAAVAAAAAAMxi20lm28EYJ9z0cZOX6Vl1f8YFnZLOqcUuO9vVnsARQAAAAANZwUk01inkzYAc7a6Dpyce9PVHiXN70cYqXGL8n/EUxUAAAAAAAADpLPU2oxlqk+85suronjTw0k17+5BOAAVDvWWFN83FeePsUZcXy/oj+9ejKcqAAAAAAAABdXPHCnjrJv29ilLy6X/1rrL1CpgAIAAAAAAAAPK0xxhJaxfoc4dLVeEZdH6HNAAAVAAAAAALS5JdtftfqVZYXM/rl+33QFwACKrr67Mf3+zKgur4X/WuUl6P5KUqAAAAAAAABa3LUylHntL0foiqPayV9iSlw3PoB0QMReOa3GSKAAAAAAAAi3lU2acuf0rv/GJQk69rRtS2Vujv/d/PcglQAAAAAAAAJ9zdt/sfqiAWNyr6pP8ApS8X+ALcAEVGvGONOfTHweJQHTTjimtU14nNSWGK0eDAwACoAAAAAAAAsLttuz9MuzwenLoXBy5KslulTy7UdHw6Mir4EWjb6cuOy9JZee4kp4gZAPCra6cd8l0Wb8EB7kC8bds/THtcf6fyRrVebllD6Vrx/BXgAAVAAAAAAAAAtrlj9M3q0vBfkqS/u2ns048/q8fxgBJABFCivOls1HpL6l7+ZekG96O1Da4xePc9/sBSgAqAAAAAAAAAAABPA9YWapLdCXhh6nsruq/pw/uQEVyb4tmCW7tq6L/JGk7FVX2PuwfoBHBmUWt6a65GAAAAAAAAAAAA3o09qSjq0jpEsMipueji3PTJdXv8vUtyKAAAYksVg9zyZkAc5aqLhJx8Oa4HkXd52bbjiu1HzXFFIVAAAAAAN6VOUnhFNvkSLFYXUzeUdeL6fJdUaMYLCKwQVXULq4zfdH5J9Kzwh2Ypc8M/E9QQAAAAAGs4J5NJ9ViQ692Qluxi+Wa8CcAOetNjnT3rFarNfg8DqGVttu1POGT4x4PpoBUgNYAqAAAGYxbaSzbyXUwWd0Wb730j7sCwstHYio6b+b4nqARQAAAAAKa87JsvbXZbz5P4LkxKKaaeaeTA5gEq3WN03is4vc9OTIpUCdd1i2/ql2V/s/g8LFZv+SWHBZyfI6CMUkkskskFEjIBAAAAAAAAAAAAAAQrwsW2tpdpf7cikaOoKu9rL96/u+QKsA9bNQdR4Lvei1KjexWZ1JYcF2n7dS/jFJJLJLJGlnoqEVFf+vU9CKAAAAAAAAAADWcU001invRS26wuGazj5rqXgAjWCz7EEuLzl10JJpg1uzWnwbJ4gZAAAAAAAAAAAAAAAAMNY5Bsxm+S8wKZ3fJzcV2V9z092W1noRgsF36t6s9EsDIAAAAAAAAAAAAAAAAAw44mQBrmufqZUkZMNJgZBrs836jPk/FAbA12no/IbXJgbA12uT8Btcn5fIGwNc+S78RsvXwyAy3gYxfBePwZUUZA1Ue9mwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" alt="" />
                        <h1>anton</h1>
                    </div>
                    <div>1 hour ago</div>
                </div>
            </div>
            <div className='w-1/4 space-y-5'>
                <div className='flex gap-2 ' >
                    <img className='rounded-xl h-24  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                    <div className='p-1 w-full  overflow-hidden h-24 '>
                        <h1 >Title</h1>
                        <p className=''>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing   </p>
                    </div>
                </div>
                <div className='flex gap-2 ' >
                    <img className='rounded-xl h-24  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                    <div className='p-1 w-full  overflow-hidden h-24 '>
                        <h1 >Title</h1>
                        <p className=''>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing   </p>
                    </div>
                </div>
                <div className='flex gap-2 ' >
                    <img className='rounded-xl h-24  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                    <div className='p-1 w-full  overflow-hidden h-24 '>
                        <h1 >Title</h1>
                        <p className=''>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing   </p>
                    </div>
                </div>
                <div className='flex gap-2 ' >
                    <img className='rounded-xl h-24  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                    <div className='p-1 w-full  overflow-hidden h-24 '>
                        <h1 >Title</h1>
                        <p className=''>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing   </p>
                    </div>
                </div>
                <div className='flex gap-2 ' >
                    <img className='rounded-xl h-24  ' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/369924255.jpg?k=62b93dc37b3ea33f141b12ac063a912b7e40fbc068d053503e1a359210cbf943&o=&hp=1" alt="" />
                    <div className='p-1 w-full  overflow-hidden h-24 '>
                        <h1 >Title</h1>
                        <p className=''>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing   </p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default DetailCart