export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded-xs border-gray-300 text-indigo-600 shadow-2xs focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
