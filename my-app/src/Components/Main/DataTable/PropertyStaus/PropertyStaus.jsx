const STATUSES = [
    'Awaiting Bank Processing', 'Payment Processed', 'Expired: No Payment Received'
]
const COLORS = [
    '#FFD056', '#75C282', '#F17E7E'
]
const PropertyStatus = ({status}) => <div>
    <div>
        {STATUSES[status]}
    </div>
</div>
export default PropertyStatus