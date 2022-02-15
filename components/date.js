export default function DateFormat({ dateString }) {
    const date = new Date(dateString)
    return (
        <div>
            {date.toLocaleString('default', { month: 'long' })}
            {' '}
            {date.getDay()}
            {', '} 
            {date.getFullYear()}
        </div>
    )
}