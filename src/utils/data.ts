export const photos = [
    { id: 1, title: "The Beach", subtitle: "Wonderful waves. Showcase the beauty of the world", views: 3, images: ["/blog-img.jpg", "/blog-img2.jpg", "/blog-img3.jpg"], uploadedAt: "7/5/2024", time: "12:33", tags: ["Beach"] },

    { id: 2, title: "Spring Time", subtitle: "A lot of wonderful memories", views: 10, images: ["/blog-img2.jpg"], uploadedAt: "7/5/2024", time: "12:33", tags: ["Spring"] },

    { id: 3, title: "Flowers", subtitle: "Tell me about your favorite flower", views: 23, uploadedAt: "7/5/2024", time: "12:33", images: ["/blog-img3.jpg"], tags: ["Flowers"] },

    { id: 4, title: "Flowers2", subtitle: "Tell me about your favorite flower again", views: 23, uploadedAt: "7/5/2024", time: "12:33", images: ["/blog-img3.jpg"], tags: ["Flowers"] },

    { id: 5, title: "Beachh2", subtitle: "Another wonderful Beach", views: 23, uploadedAt: "7/5/2024", time: "12:33", images: ["/blog-img3.jpg"], tags: ["Outside", "Beach"] },

    { id: 5, title: "Beachh3", subtitle: "Another wonderful Beach", views: 23, uploadedAt: "7/5/2024", time: "12:33", images: ["/blog-img3.jpg"], tags: ["Outside", "Beach"] },
]

export const journals = [
    {
        id: 1, title: "Took a big step", subtitle: "It was so refreshing outside, and I could see the beauty of the world. I wanted to be outside forever", content: ` # Lorem ipsum dolor sit
         amet consectetur adipisicing elit. Reprehenderit id fugit, voluptatibus, obcaecati neque ducimus maiores omnis explicabo deleniti laudantium voluptatum repudiandae quia similique iusto eius aut reiciendis quidem voluptates doloremque sed. Quaerat consectetur, illo ea velit ipsam itaque veritatis officia animi? Soluta, quas incidunt dignissimos possimus non eos necessitatibus?
         \`\`\`js
         backtick.fences('for blocks')
         console.log("hello, world")
         \`\`\`

         Three asterisks for a thematic break:
         ***

         ![Alt text](/the-sunset.jpg "title")
         `, views: 10000, images: ["/the-sunset.jpg", "/blog-img.jpg"], uploadedAt: "7/5/2024", time: "12:33", tags: ["Sky", "Clouds"]
    },

    {
        id: 2, title: "It was beautiful", subtitle: "This was my journey to a place. I was hesitant at first, but I really loved the look of the sunset from the car", content: `
         # Lorem ipsum dolor sit
         amet consectetur adipisicing elit. Reprehenderit id fugit, voluptatibus, obcaecati neque ducimus maiores omnis explicabo deleniti laudantium voluptatum repudiandae quia similique iusto eius aut reiciendis quidem voluptates doloremque sed. Quaerat consectetur, illo ea velit ipsam itaque veritatis officia animi? Soluta, quas incidunt dignissimos possimus non eos necessitatibus?
         ~~~js
         backtick.fences('for blocks')
         console.log("hello, world")
         ~~~

         Three asterisks for a thematic break:
         ***

         ![Alt text](/the-sunset.jpg "title")
         
        `, views: 23, uploadedAt: "7/5/2024", time: "12:33", images: ["/travelling.jpg", "/blog-img2.jpg"], tags: ["Nature", "Outside"]
    },
]

export const tags = [
    "Nature",
    "Outside",
    "Sky",
    "Clouds",
    "Beach"
]