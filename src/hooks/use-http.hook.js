import axios from 'axios'
import { useCallback, useState } from 'react'

export function useKyc() {
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


export function usePaymentGateway() {
    const [loading, setLoading] = useState(false)

    const confirmPayment = useCallback((formData, callback) => {
        setLoading(true)

        axios
            .post(
                'https://rgw.k8s.apis.ng/centric-platforms/uat/instant-payment/ConfirmPayment', 
                formData,
                { headers: { ClientId: process.env.REACT_APP_I_SWEAR_CLIENT_ID } }
            )
            .then(res => {
                setLoading(false);
                callback(null, true)
                console.log(res.data);
                return res.data
            })
            .catch(err => {
                setLoading(false);
                callback(true, null)
                console.log(err)
            })
    }, [])

    return [
        loading,
        confirmPayment
    ]
}


export function useVirtualPayment() {
    const [loading, setLoading] = useState(false)

    const virtualPayment = useCallback((formData, callback) => {
        setLoading(true)

        axios
            .post(
                'https://rgw.k8s.apis.ng/centric-platforms/uat/virtualpay/MakePayment', 
                formData,
                { headers: { ClientId: process.env.REACT_APP_I_SWEAR_CLIENT_ID } }
            )
            .then(res => {
                setLoading(false);
                callback(null, true)
                console.log(res.data);
                return res.data
            })
            .catch(err => {
                setLoading(false);
                callback(true, null)
                console.log(err)
            })
    }, [])

    return [
        loading,
        virtualPayment
    ]
}


export function useCreateInvoice() {
    const [loading, setLoading] = useState(false)

    const createInvoice = useCallback((formData, callback) => {
        setLoading(true)

        axios
            .post(
                'https://rgw.k8s.apis.ng/centric-platforms/uat/CreateInvoice', 
                formData,
                { headers: { ClientId: process.env.REACT_APP_I_SWEAR_CLIENT_ID } }
            )
            .then(res => {
                setLoading(false);
                callback(null, res.data)
                console.log(res.data);
                return res.data
            })
            .catch(err => {
                setLoading(false);
                callback(true, null)
                console.log(err)
            })
    }, [])

    return [
        loading,
        createInvoice
    ]
}


export function usePayWithTxnPin() {
    const [loading, setLoading] = useState(false)

    const payWithTxnPin = useCallback((formData, callback) => {
        setLoading(true)

        axios
            .post(
                'https://rgw.k8s.apis.ng/centric-platforms/uat/PayWithTransactionPin', 
                formData,
                { headers: { ClientId: process.env.REACT_APP_I_SWEAR_CLIENT_ID } }
            )
            .then(res => {
                setLoading(false);
                callback(null, res.data)
                console.log(res.data);
                return res.data
            })
            .catch(err => {
                setLoading(false);
                callback(true, null)
                console.log(err)
            })
    }, [])

    return [
        loading,
        payWithTxnPin
    ]
}