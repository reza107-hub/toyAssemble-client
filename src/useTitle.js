import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyAssemble | ${title}`
    }, [title])
}

export default useTitle