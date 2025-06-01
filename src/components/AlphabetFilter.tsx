const letters = [... "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

const row1 = letters.slice(0, 10);
const row2 = letters.slice(10, 19);
const row3 = letters.slice(19);

interface AlphabetFilterProps {
    onSelect: (letter: string) => void;
}

export default function AlphabetFilter({ onSelect }: AlphabetFilterProps) {
    const renderRow = (row: string[]) => (
        <div className="flex justify-center gap-2 mb-2">

            {
                row.map((letter) => (
                    <button
                        key={letter}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                        onClick={() => onSelect(letter.toLowerCase())}>
                        {letter}
                    </button>
                ))
            }
        </div>
    );
    return (
        <div className="">
            {renderRow(row1)}
            {renderRow(row2)}
            {renderRow(row3)}
        </div>
    )
}
