export enum ChipColor {
    blue = `bg-blue-500`,
    gray = `bg-gray-800`,
}

export enum ChipSize {
    small = `px-3 py-1`,
    large = `px-4 py-2`,
}

interface Props {
    children: React.ReactNode;
    color?: ChipColor;
    size?: ChipSize;
    onClick?: () => void;
}

function ChipButton(props: Props) {
    const {
        children,
        color = ChipColor.blue,
        size = ChipSize.large,
        onClick,
    } = props;

    return (
        //TODO: refactor to button once tag functionality is implemented
        <div
            className={`${color} ${size} ml-1 mb-1 text-sm md:text-base text-white flex items-center rounded-full text-center`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default ChipButton;
