import axios from 'axios'
import { useCallback, useState } from 'react'

export function useHttp() {
    const [bvnLoading, setBvnLoading] = useState(false)

    const verifyBvn = useCallback((formData, callback) => {
        setBvnLoading(true)

        axios
            .post(
                'https://rgw.k8s.apis.ng/centric-platforms/uat/customer/identity/BVN', 
                formData,
                { headers: { ClientId: process.env.REACT_APP_I_SWEAR_CLIENT_ID } }
            )
            .then(res => {
                setBvnLoading(false);
                callback(null, true)
                console.log(res.data);
                return res.data
            })
            .catch(err => {
                setBvnLoading(false);
                callback(true, null)
                console.log(err)
            })
    }, [])

    return {
        bvnLoading,
        verifyBvn
    }
}