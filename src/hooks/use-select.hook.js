import { useState } from 'react'


export function useSelect() {
    const [value, setValue] = useState("bvn")

    const handleChange = e => {
        setValue(e.target.value)
    }

    return [
        value,
        handleChange,
        setValue
    ]
}