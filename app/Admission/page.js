import AdmissionBanner from '@/component/Admission/AadmissionBanner'
import Info from '@/component/Admission/Info'
import QueryFrom from '@/component/Admission/QueryFrom'


export default function page() {
    return (
        <>
            <AdmissionBanner />
            <QueryFrom />
            <Info />
        </>
    )
}
