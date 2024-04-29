import clsx from "clsx"

function Button({ children, variant, color, size }) {
    return (
        <div className={clsx(
            `flex w-fit justify-center bg-${color} p-3`,
        )}>
            <p className="font-bold">
                {children}
            </p>
        </div>
    )
}

export default Button