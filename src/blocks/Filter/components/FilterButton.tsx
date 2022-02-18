// import Icon from '@src/components/Icon/Icon'
// import React from 'react'

// interface FilterButtonProps {
//     isMenuOpen: boolean
//     setIsMenuOpen: Function
//     type: string
//     icon: string
//     title: string
// }
// const FilterButton: React.FC<FilterButtonProps> = ({
//     isMenuOpen,
//     setIsMenuOpen,
//     type = 'menu',
//     icon = 'X',
//     title,
// }): JSX.Element => {
//     return (
//         <button
//             className={`content-filter__button content-filter__button--${type}`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//             <figure className='content-filter__icon'>
//                 <Icon icon={icon} size={12} />
//             </figure>

//             {title && (
//                 <span className='content-filter__button-text'>{title}</span>
//             )}
//         </button>
//     )
// }
// export default FilterButton
