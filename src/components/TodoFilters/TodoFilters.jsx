import React from 'react'
import {FilterButton, FilterButtonContainer, ItemsLeft, TodoFiltersContainer} from './TodoFilters.components'

function TodoFilters( ) {
    return (
        <div>
            <TodoFiltersContainer>
                <ItemsLeft/>
                <FilterButtonContainer>
                    <FilterButton action={()=>{ }} active='all'  filter='all' />
                    <FilterButton action={()=>{ }} active='all'  filter='Active' />
                    <FilterButton action={()=>{ }} active='all'  filter='Completed' />
                </FilterButtonContainer>
                <button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
                    Clear Completed
                </button>
            </TodoFiltersContainer>
        </div>
    )
}

export default TodoFilters 