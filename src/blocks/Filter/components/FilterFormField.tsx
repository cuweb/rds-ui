// import Icon from '@src/components/Icon/Icon'
// import React from 'react'
// import useVisible from '../../../functions/useVisible'

// const FilterFormField = (props) => {
//     const { filter, isSelected, handleSelect, handleApply, filterItems } = props
//     const { ref, isVisible, setIsVisible } = useVisible(
//         false,
//         'form__dropdown-button'
//     )

//     const itemTitle = 'Categories'

//     return (
//         <div
//             className={`form__field form__field--checkbox ${
//                 isVisible ? `form__field--dropdown` : ''
//             }`}
//         >
//             <fieldset>
//                 <div
//                     className='form__group--dropdown-button'
//                     onClick={() => setIsVisible(!isVisible)}
//                 >
//                     {itemTitle}
//                     <figure className='form__icon'>
//                         <Icon icon='chevron-down' size={12} />
//                     </figure>
//                 </div>
//                 {isVisible && (
//                     <div className='form__group--dropdown' ref={ref}>
//                         <div className='form__group--dropdown-content'>
//                             {filterItems.length === 0 && (
//                                 <div className='form__group'>No Items</div>
//                             )}
//                             {filterItems.map((item, index) => {
//                                 const { id, name, taxonomy } = item
//                                 return (
//                                     <div className='form__group' key={index}>
//                                         <input
//                                             id={id}
//                                             type='checkbox'
//                                             name={name}
//                                             className='form__input--checkbox'
//                                             onChange={() =>
//                                                 handleSelect(taxonomy, id)
//                                             }
//                                             defaultChecked={isSelected(
//                                                 taxonomy,
//                                                 id
//                                             )}
//                                         />
//                                         <label htmlFor={id}>{name}</label>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                         <div className='form__group--dropdown-footer'>
//                             <a
//                                 href='#'
//                                 className='content-filter__button content-filter__button--apply'
//                                 onClick={(e) => {
//                                     setIsVisible(false)
//                                     handleApply(e)
//                                 }}
//                             >
//                                 Apply Filters
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </fieldset>
//         </div>
//     )
// }
// export default FilterFormField
