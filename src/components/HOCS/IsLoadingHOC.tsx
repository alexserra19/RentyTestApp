import React, { useState } from "react"
import { LoadingOverlay } from "../shared/LoadingOverlay";

export const IsLoadingHoc = (WrappedComponent) => {
    function HOC(props) {
        const [isLoading, setLoading] = useState(true);

        return (
            <>
                {isLoading && <LoadingOverlay />}
                <WrappedComponent {...props} setLoading={setLoading} />
            </>
        )
    }
    return HOC
}

export default IsLoadingHoc