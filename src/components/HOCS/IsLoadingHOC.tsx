import React, { useState } from "react"
import { LoadingOverlay } from "../shared/LoadingOverlay";

export const IsLoadingHoc = (WrappedComponent) => {
    function HOC(props) {
        const [isLoading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading)
        }

        return (
            <>
                {isLoading && <LoadingOverlay />}
                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        )
    }
    return HOC
}

export default IsLoadingHoc