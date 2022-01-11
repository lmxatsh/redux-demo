import { filterChange } from './reducer/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
    const dispath = useDispatch()

    return (
        <>
            <input
                type="radio"
                name="filter"
                onChange={() => dispath(filterChange('ALL'))}
            />
            ALL
            <input
                type="radio"
                name="filter"
                onChange={() => dispath(filterChange('IMPORTANT'))}
            />
            IMPORTANT
            <input
                type="radio"
                name="filter"
                onChange={() => dispath(filterChange('TRIVIAL'))}
            />
            TRIVIAL
        </>
    )
}

export default VisibilityFilter
