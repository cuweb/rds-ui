import React, { useState } from 'react'
// import FilterButton from './components/FilterButton'
// import FilterItems from './components/FilterItems'
import './Filter.scss'

const Filter = () => {
    // const { contentFilterSave } = props
    // const { contentFilters } = props.attributes || props.attrs || props
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [selectedItems, setSelectedItems] = useState([])

    // const getSelected = (taxonomy, id) => `${taxonomy}${id}`
    // const isSelected = (taxonomy, id) =>
    //     selectedItems.includes(getSelected(taxonomy, id))

    // const handleSelect = (taxonomy, id) => {
    //     const selected = getSelected(taxonomy, id)
    //     if (!selectedItems.includes(selected)) {
    //         return setSelectedItems([...selectedItems, selected])
    //     }
    //     return setSelectedItems(
    //         [...selectedItems].filter((item) => item !== selected)
    //     )
    // }
    // const handleApply = (e) => {
    //     e.preventDefault()
    //     setIsMenuOpen(false)
    //     contentFilterSave(selectedItems)
    // }

    // const handleReset = (e) => {
    //     e.preventDefault()
    //     setIsMenuOpen(false)
    //     setSelectedItems([])
    //     contentFilterSave([])
    // }

    // const globalProps = {
    //     ...props,
    //     isMenuOpen,
    //     setIsMenuOpen,
    //     contentFilters,
    //     isSelected,
    //     handleSelect,
    //     handleApply,
    //     handleReset,
    // }

    // const menuButtonProps = {
    //     ...globalProps,
    //     type: 'menu',
    //     title: 'Filter Options',
    //     icon: 'settings',
    // }

    return (
        <div className='content-filter'>
            {/* <div className='content-filter__actions'>
                <FilterButton {...menuButtonProps} />
            </div>
            <FilterItems {...globalProps} /> */}
        </div>
    )
}
export default Filter
