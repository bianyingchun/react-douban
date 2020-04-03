import React from 'react'

type CardProps = {
    title: string,
    paragraph:string
}

// 第一种
// const Card = ({title='默认title', paragraph="默认desc"} :CardProps) => {
//     return (
//         <aside>
//             <h2>{title}</h2>
//             <p>{paragraph}</p>
//         </aside>
//     )
// }

// 第二种 可以获取children参数得到传入的子元素

const Card: React.FC<CardProps> = ({
    title,
    paragraph,
    children
}) => {
    return (
        <aside>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div>{children}</div>
        </aside>
    )
}
export default Card